import React from "react";

export default function RestaurantSuggestion(){
  return (

  <main>
    <section
    className="absolute inset-y-28 object-cover w-full"
    >
      <h1
      className="text-6xl text-black font-bold cursive home-name text-center"
      style={{color: "#374151"}}>
      Restaurant Suggestion Android Application
      </h1><br></br><br></br><br></br>
      <div className="pl-2 pr-2">
          <h2
          className="text-6xl text-black font-bold cursive home-name1" style={{color: "#374151"}}>Project Description</h2><br></br>
          <p1
          className="relative -inset-y-4" style={{color: "#374151"}}>
          I was a part of a group and we designed an Android application that would suggest a random restaurant to users based on locale. My role was working on the backend with another student,
          where we used Springboot along with the Yelp API as well as MySQL for our database to send restaurant recommendations to the frontend users. Over the course of the project I learned a
          great deal about Springboot and how to use API's in conjunction with a project, in my case, the Yelp API. I also learned how to use a MySQL database, for storing and retrieving relevant
          information.
          </p1>

          <h2
          className="text-6xl text-black font-bold cursive home-name1 relative inset-y-10" style={{color: "#374151"}}
          >
          My Role
          </h2><br></br>
          <p1
          className="relative inset-y-6" style={{color: "#374151"}}>
          On the backend, our application confidently communicated with the Android frontend, where a user would give their location, and the backend would then query the Yelp API to get a list
          of restaurants and relevant information and return it to the front end for display. In addition, a user had the ability to give a review of the restaurant, which we then would store in
          the database. For future iterations of this project, the team envisioned that a user would be able to leave reviews for certain menu items which would be useful to other users in the future.
          For example, if someone wanted to try the best burger in town, we could return to them a list of restaurants with high reviews on burgers.
          </p1>

      </div>
    </section>
  </main>
)


}
