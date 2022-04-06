import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
   
    // const categories = ['Sailor Moon', 'Sakura Card Captor', 'Ranma 1/2'];
    const [categories, setCategories] = useState(['Sakura Card Captor']);
    

    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />
        
        <ol>
            {
                categories.map(category => (
                    <GifGrid 
                        key={category}
                        category={category} />
                        ))
            }
        </ol>
    </>
    )
}