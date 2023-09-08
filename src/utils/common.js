export const filterData = (search, allRestaurants) => {
    return allRestaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase()?.includes(search.toLowerCase())
    );
  };