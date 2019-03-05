// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
    {
      name: "Ahmed",
      photo: "https://via.placeholder.com/150",
      friendscore: [
        "3",
        "2",
        "3",
        "4",
        "5",
        "3",
        "2",
        "4",
        "5",
        "4"]

      
    },
    {
        name: "Fred",
        photo: "https://via.placeholder.com/150",
        friendscore: [
          "5",
          "2",
          "3",
          "4",
          "5",
          "3",
          "1",
          "3",
          "5",
          "2"]
        
      },
      {
        name: "Adam",
        photo: "https://via.placeholder.com/150",
        friendscore: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "1",
          "2",
          "3",
          "4",
          "5"]
  
        
      },
      {
        name: "Isaac",
        photo: "https://via.placeholder.com/150",
        friendscore: [
          "5",
          "4",
          "3",
          "4",
          "5",
          "2",
          "1",
          "5",
          "4",
          "3"]
  
        
      },
      {
        name: "Nicolas",
        photo: "https://via.placeholder.com/150",
        friendscore: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "4",
          "3",
          "2",
          "5",
          "1"]
  
        
      },
      {
        name: "Robert",
        photo: "https://via.placeholder.com/150",
        friendscore: [
          "5",
          "2",
          "3",
          "4",
          "5",
          "4",
          "3",
          "2",
          "5",
          "1"]
  
        
      },
      {
        name: "Daniel",
        photo: "https://via.placeholder.com/150",
        friendscore: [
          "2",
          "2",
          "3",
          "3",
          "5",
          "5",
          "4",
          "4",
          "2",
          "2"]
  
        
      },
      {
        name: "Eric",
        photo: "https://via.placeholder.com/150",
        friendscore: [
          "1",
          "1",
          "3",
          "3",
          "4",
          "5",
          "5",
          "5",
          "5",
          "5"]
  
        
      },
      {
        name: "Wilber",
        photo: "https://via.placeholder.com/150",
        friendscore: [
          "5",
          "5",
          "5",
          "5",
          "5",
          "5",
          "5",
          "5",
          "5",
          "1"]
  
        
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  