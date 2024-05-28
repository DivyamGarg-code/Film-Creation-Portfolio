import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <div className='flex flex-col items-center gap-10 p-4'>
            <div className='w-full flex justify-end'>
                <Link to="/" className='film-card-btn btn'>Back To Home</Link>
            </div>
            <div className='max-w-[1000px] w-full flex-wrap flex flex-row gap-8 justify-between md:items-center md:flex-nowrap'>
                <div className='flex flex-col items-start gap-3'>
                    <span className='font-semibold text-xl'>Lorem ipsum dolor sit.</span>
                    <span className='max-w-[600px] textLimiter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam modi tempore eum non ratione repellat quasi asperiores maiores laboriosam, deleniti consequuntur, doloremque dignissimos culpa natus mollitia laudantium. Ipsum optio tempora mollitia, culpa architecto, exercitationem dolores eum eius nemo atque quae itaque sed dignissimos beatae nam earum accusamus! Maiores ipsa nisi expedita itaque exercitationem. Reprehenderit animi vitae expedita alias debitis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam officia ducimus dicta tempora aut beatae. Suscipit nihil atque, accusamus facere dignissimos beatae ad repellat iure itaque similique consequuntur provident animi?</span>
                    <span className='film-card-btn btn '>Read More</span>
                </div>
                <div className='h-[250px] max-w-[300px] w-full bg-purple-800 rounded-lg'></div>
            </div>
            <div className='max-w-[1000px] w-full flex-wrap flex flex-row-reverse gap-8 justify-between md:items-center md:flex-nowrap'>
                <div className='flex flex-col items-start gap-3'>
                    <span className='font-semibold text-xl'>Lorem ipsum dolor sit.</span>
                    <span className='max-w-[600px] textLimiter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam modi tempore eum non ratione repellat quasi asperiores maiores laboriosam, deleniti consequuntur, doloremque dignissimos culpa natus mollitia laudantium. Ipsum optio tempora mollitia, culpa architecto, exercitationem dolores eum eius nemo atque quae itaque sed dignissimos beatae nam earum accusamus! Maiores ipsa nisi expedita itaque exercitationem. Reprehenderit animi vitae expedita alias debitis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam officia ducimus dicta tempora aut beatae. Suscipit nihil atque, accusamus facere dignissimos beatae ad repellat iure itaque similique consequuntur provident animi?</span>
                    <span className='film-card-btn btn '>Read More</span>
                </div>
                <div className='h-[250px] max-w-[300px] w-full bg-purple-800 rounded-lg'></div>
            </div>
            <div className='max-w-[1000px] w-full flex-wrap flex flex-row gap-8 justify-between md:items-center md:flex-nowrap'>
                <div className='flex flex-col items-start gap-3'>
                    <span className='font-semibold text-xl'>Lorem ipsum dolor sit.</span>
                    <span className='max-w-[600px] textLimiter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam modi tempore eum non ratione repellat quasi asperiores maiores laboriosam, deleniti consequuntur, doloremque dignissimos culpa natus mollitia laudantium. Ipsum optio tempora mollitia, culpa architecto, exercitationem dolores eum eius nemo atque quae itaque sed dignissimos beatae nam earum accusamus! Maiores ipsa nisi expedita itaque exercitationem. Reprehenderit animi vitae expedita alias debitis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam officia ducimus dicta tempora aut beatae. Suscipit nihil atque, accusamus facere dignissimos beatae ad repellat iure itaque similique consequuntur provident animi?</span>
                    <span className='film-card-btn btn '>Read More</span>
                </div>
                <div className='h-[250px] max-w-[300px] w-full bg-purple-800 rounded-lg'></div>
            </div>
        </div>
    )
}

export default Blog

const BlogCard = () => {
    return (
        <div className='max-w-[1000px] w-full flex-wrap flex flex-row gap-8 justify-between md:items-center md:flex-nowrap'>
            <div className='flex flex-col items-start gap-3'>
                <span className='font-semibold text-xl'>Lorem ipsum dolor sit.</span>
                <span className='max-w-[600px] textLimiter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquam modi tempore eum non ratione repellat quasi asperiores maiores laboriosam, deleniti consequuntur, doloremque dignissimos culpa natus mollitia laudantium. Ipsum optio tempora mollitia, culpa architecto, exercitationem dolores eum eius nemo atque quae itaque sed dignissimos beatae nam earum accusamus! Maiores ipsa nisi expedita itaque exercitationem. Reprehenderit animi vitae expedita alias debitis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam officia ducimus dicta tempora aut beatae. Suscipit nihil atque, accusamus facere dignissimos beatae ad repellat iure itaque similique consequuntur provident animi?</span>
                <span className='film-card-btn btn '>Read More</span>
            </div>
            <div className='h-[250px] max-w-[300px] w-full bg-purple-800 rounded-lg'></div>
        </div>
    );
}