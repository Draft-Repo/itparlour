<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller

{

    public function  getData(){
        $items = Category::all();
        $tree  = [];
    
        foreach($items as $item){
            $item->children = [];
            if($item->parent_id==null){
                array_push($tree, $item);
            } else {  
                $parent= $items->find($item->parent_id);
                $parent->children=array_merge($parent->children, [$item]); 
            }
        }

         return $tree;
         
        }


    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

          return $this::getData(); 
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return "create";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
 
    
        if ($request['category'] == null) {
            
            return response()->json(['messege' => 'Category Empty', 'error' => true, 'data'=> $this::getData()]);
        
        }
       
        if (Category::where('category_name', '=', $request['category'])->exists()) {
           
            return response()->json(['messege' => 'Category exists', 'error' => true, 'data'=> $this::getData()]);     

        } else {

        $category= new Category();
        $category->parent_id = $request['parent'];
        $category->category_name = $request['category'];
        $category->category_slug = str_replace(" ", "-", strtolower($request['category']));
        $category->save();

        $category = DB::table('categories')->get();
            return response()->json(['messege' => 'Saved', 'error' => false, 'data'=> $this::getData()]);
              

        }

    
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return "show";
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        return "edit";
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        return "update";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        return "destroy";
    }


    public function tree(){

        $items = Category::all();
        $tree  = [];
    
        foreach($items as $item){
            $item->children = [];
            if($item->parent_id==null){
                array_push($tree, $item);
            } else {  
                $parent= $items->find($item->parent_id);
                $parent->children=array_merge($parent->children, [$item]); 
            }
        }
    
        return $tree;
           
       }


}