'use server';


export async function shareMeal(formData) {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_Email: formData.get('email'),
    }
    console.log('Received meal data:', meal);
}