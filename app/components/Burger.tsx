import React from "react";

const products = [
  {
    id: 1,
    title: "Mexican Burger",
    Catagory: "fixing",
    price: "200.00",
    description: "Delicious Mexican burger with a side of fries",
    imageUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAOEA8QDxAPEA8QDw4QDxAQDxAQEA0QFRUWFhURExUYHCggGBolGxUVITEhJSkrLy4uFx8zODMsNygtLisBCgoKDg0OGBAQGy0lHiUtLS0rLSstLS0tLS0tLS0rLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIDBAUGB//EADwQAAEEAAMFBgMFBwQDAAAAAAEAAgMRBCExBRJBUWEGEyIycZFSgaEUQmKx0SNygpLB4fAVMzSiB1OT/8QAGwEBAQADAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAzEQEAAgIBAwMCBAUEAgMAAAAAAQIDEQQSITEFE0EyUSJhkaEUcYGx0RUjQlJDwQbw8f/aAAwDAQACEQMRAD8A92vceCEAgEAgEAgEAgEAihAKAQCAQCAVAiBAIBAIBAIBAIBAIBAIBAIBAIBAIBRRSBoCkDpQFIopAUgVKoEAgSAVAiBAIBAIBAIBAIBAIBAIBAKKaAQOlFOkBSB0oopAUgKQFKoVIFSBUqgQJAKoEAgEAgEAgEAgEAgEUKBoHSinSB0op0oHSKKQOkNCkNFSApAqRCpUKlUKkCVQkAqBECAQCAQCAQCAQCimgoBRTAUUwFBVIp0op0gKQOlFFIFSqCkCpAqVTRUiJIVCIVRKBKoFQIgQCAQCAQCAUUwgoBRVAKKYCiqAUUwEDpRdHSgdIopNgpNgpNhUgKVRJCqEQgkhVCIVRJCqJKBKoFUCAQCAQCARTCgoBRVAKKYCiqAUVQCiqAUUwFA1ja8V7zLKKzPiGGbGRsJDnAEZEUSQeRpc1+dgr5s7Mfp3JyRutJ1+jD/qkX46ys7poeq0T6rgjxv9HRHo/I+dR/VYxzNwyEObGN7dc6h3hHBguycisa+q45jcxJb0nLFumJhGG2nFId0Eg0T4hQy6rZX1PBPzP6ML+lcinfUfqyxY2J+TZGE8t4X7LppycV/ptDlycTNj+qssxC3uYiFRJCqJIVQiFUSQqiSFUSqhIBVAgEAgEDUUwoqgoqgFFUAoqgFFUAsZlYNpBO6HNLj929ANS4/dA6rgz+oY8VumO8u7DwMl69c9oaGL2jRqGxVgucGnePNo4D9V43J9UyZO1e0Pd4fo+On4sveWpNjZHua4upzW7oLcjR1N8yvOtltPmXqY+NjpExEeSk2fKI++c2mGjbiAXWdQNTqnTbW1jkYpv7dfP5IY8vDYnSBkV3m3wg62aFk+qkXme22V8dazOSK7lhxrGtO6yQyMAB3iC0bx1ABP1VmYjxJi6rRu1dS03hIlnMLkihMW8JHCUaxuZ4X/ALrhp81ti0Oeevq1rsqXFyYYRiOcSNc0PoAEMOXhN5/lxXTj5GSmpizlvxsWXcWo6uztvRyndf8As3k5WfC7oDz9V7PE58X/AA38vC5vptsX4sfev7usQvTeSkhVEkKoghVEkKokqoSqEqBECAQCimEFBRVBYqsKMlAKKusnO4NFk8lozcjHhjd503YcF8tumkbc9+0nA/s/DqLIBOfHovm+Z6lfLM1r2q+n4npGPFETk72/ZoUvLmXsMkOHdI4NYC5x0ASsTadQxvkrjjqtPZiLasHUEg9CFjPZnFomNw2cEYAT37ZHDLd3CBXrmFnSaf8AJozVzdvamI/m1Zg3eduAhtndDtQOF9VjMxvs6MfV0x1eWFwU22DDytY7efGJAL8LiQL5rOttS1ZaTauonTbxuAjeWz99E2F7o2vaxgZ3BOXlvPPU5c10TETqYcNMt6bpMTuPG/lxtrYQwSujJDsg5rho5p0P0KTGm7HkjJXbDtAQGON0RIkybLGbOdecHka+q2Vlr1bcxLsdnNtl57mU+I/7b+Z+Er2eByf/AB2/o8L1Ph/+Wn9f8vRkL2HhoIVRJCqJKrFJWQgqoRRAqgQCACiqCiqCirCiqAUVbQNXHdaNXHh0HM9Fy8rk0wU6p8/EOnj8e+a/TWHP2jixJutYCGNur1eT95y+T5XLtntuX13B4Ucav5y1GtJNAEk6ACyVyeXdNoiNyp8ZaacC0jUEEEfIqTEx2ljW8WjcSy4TEuhdvsreojMWKKypeaTuGGXFXLXpswPNkk6kknqSsJnbZWIiNQTI3ONNaXHk0En2CsRM+Fm9axu06TNE5hpzXNPJwIP1SYmPLKl62jdZ2wOCNkMT0hWtIs4Yy1pFshrlTNnl8E0++1rYuBFlxqz6ahbaRtzZL6tEOW19EEeoI4LfWdMLRt9B2JjvtELXHzjwv/eHH56r6Pi5vdxxM+fl8lzeP7OWYjxPhukLqciSqxQVkkpKsIgqoRVQlUCARTCgoKKoLFVhRlCgpKtPaU5/2sqY4k1xdp9F8j6nyYy5fw+IfYelcT2cXVbzLHHgyYXTE0A5rWis3kkX7X9CuCMf4JvLttn1ljHEfz/I8FinQkuZu2RVkXQ6LGmSaTuDNhrljVkTSOkcXONudqVLWm07llSlaV6a+HR2II3F8UjLMg8JqyKBsDlztdHH6Z3W0eXHzOuNXrPhz58K+M7r2kOrjx6ilptjms6l1481bxust+bBy4MNljkBa4AFwA46ZG7HVb5xXwx11ly1zY+TPt3hy8diXzO35DZrdGQAA6BaL3tedy7cOKmKNVa8UJke1ja3nODRellY1jc6huveKVm0+IYtoYd0Mjo31vNo5aEHQhZWpNZ1KYs1ctOqrQkKQzlqyFZw1y3NnNgfDOyVwD3mJrAXECySA4C8yCQt1HLl6uqNeHH2hhXQSOjdRLdCNHA6FbYY721MZO9rGlkj43BwzY9zLHI18l0UtMeJXFWtratET/OG7svtPi4iN6TvmcWyZn+bX81vpzcuOfO4/Nll9G4ueO1emfvH+PD3uzcczExtkZYBsEHVjhq0r28GauWkWh8bzeJfi5ZxX/8A2Gcre5ElVigrJElVCVAiBRTCCgoqwsWSwoq2ddBZPoM1z8nJ7eK1m/j4/cyVq1MThWfaxGDbHPjvO9QCRf8Amq+MvWJy6fZY8tv4abfMbRtKXxujaf2Ub3bjRoOfrnawy2/FNY8Qy41PwxefqmO7HhIO8e1gNbxq+SxpXqtENmXJ0Um32dTCbMaXYiNx8cdBh0GYver5hdVMFd2rPw4MvKvFaXjxPlowWN1wNEUQRwK1VjU7h1X1aNT4bUzn4h7N9wvyg6AXqfoFtmZyTHU01rXDWZrCtp4F0LG70m8zeADbIAdROQ91lkxTWPPZjgz1yX+nUtXaOyXxM7wFr2UCS37oPHqFqvgmI3Dfg5lb36JjUuMJCwhzTRaQQeRGYXPE6ncPQmsWrNZ8SjamMM8plcADuNZQ0oWb9yVsvebtWDBGGvTEudI5SG2WBrC9zWt8znBos0LJoZrOIarTqNq2xsp+Ga1z3RkOO74STRq+IHJboq0RlizjyvJNkknmSSfqtlWMtXHMJhdJdhskbS3j4uPvXutkT3Z4Y3fRQUBZ0UtL1sVdRuXv+xcdYYk/flc6uQpoH5L2vTI1SYfHf/IrRbNW35O6V6j5xBVRJVYpKokqoFUAUVQUVQUVQUVYUVbvJIfw17kLzfU7aw6ep6VXeeJ+zg3R+a+Rt5fZa7NzBYF8rXubQawElzjQJAuh1Vpjm/dz5uRTFMVnzLNsmCSRwdEBbCDbjQHIFZYaWmd1+GvlZMda9N/llxDntlk3jUl+LdJrMA0OlELZbqi078sMcUtjjp8fmTSkMpDnLIiGCaT6adPRYzLOtGKYzOhfReYAQH0fDzojWtL4Kbt09vDKIwxliJ+pq4DDiaWOMmg451rQBJr2WqkdVoh0cjJOLFNo8tPbDGxYiWJl7rd2rN1YurWy9IrPZr4+W2Sm7eXOkKxhtlqyFZwwlq4l5cQXFziNN4k16WtsTLTOmpI7XkNVtiGvzOoc1rnvLi5x7sltR8Du3Tne6ymfs9Pj8aK/it5bmEgfO9rGjiOjWjmTwCViPlsz5OmszL6ts3BiCJkYN0Mz8TjqV9LxsUY6afnnO5M8jLNvj4bBXQ4kFZMZQVUSVUSqgVQBRVBRVBRVhRYUFjLJbs2SD8IP1/uvM9TjeKHq+kzrP/R59+q+Tv5fZR4bLMbIIzEHVGSSQBmb4E8kjJMV6Wm3HpOT3J8nh8S+O9x7m3rRq0rea+EyYaX+qNm2TMkkkk2STZJ5krLq33lOiIjUOph9mSSMD2llEWASbI9lvrjmY24snKpS81mJcx030JHzGRWuZdta77sEkiwmW2tW1s7arYWSskaXMeCQBRzqiM+YpZ48kR2lzcni2yWrevmHDw8z49xwNPbRB1o/1WvffcO2axavTZrTuLnOe4kucd5xOpKymZnyxrWKxqGrI5WGMy1JXrZENcy0cTiGszcaHDmfQLdWrCKzbw50uL7zIZN4AZk9Ss5tFfLsxY607/LbwuCJG88hjB5nOIa0DqTkFp93c6rDZfkRWHo9h4ZjsoCJDu7+60hpc263xv1vC+K214ubJP5/Z4/I9Rx1nVpe6i8jMi3wi2mrB/yl9Hwq3rhiL+Xy3NtS2abU8SCuxxoKyYygqwiSqiSqgVQBRVBRVBRYWFFhQWLJkZxHAggrn5OL3Mc1dPFze1lrZwMW3dcR1Xxuak1tMS+8w2i1YmGMXRNHdBAJo0CdAStGvlnMxvW+5hyhpXeKp0qGJe0ENe9oOoa9zR9Cs4vMeGFsNLTuYZnbNlZCZS0Nja3eomnbvxV+qz9u8xtpjlYpv7cef2aLnrU7IhZwcjoXzjdEbLuzm4DUgdFnXHMxtpvyKVyRj+XOe9SIbZlqSyhZxDXMubjNoMZ5nAdOJ9Bqttatcy48203vyjbQ+J2Z+QWU2irDW2ODZveOt1ucdS4klab55ZRDdxT4ME0F4t58kY8zv0HVTFjvmn8kvkirhullxkje8OXi3IxYYygTkOJy1K9fDhrSOzjyXnzL2rtoNhxWzgzJ8bGiXKm7jyG0elb6yyZfbyUtHw8XlV6ofRrBFg2CLB5jmvoKzExuHjykrJEFZMZSVUQVUSVUCqAKKoKKoKKoKKsKKyRtsgDUmgteS8UrNp8QzrEzMRDR25ALyGYFXzXw3I5k5Mk2t8vs/T6+3jisS4mP7SRQYZuHf4Hvk8TnUGkBwdd89AtlNXxzFXV7Fvf92fDTj2nG7MOaR0IWmccw7YjbJ9tbzWPTK6Scc3mFek6RtPb8k43ZJv2eVtaA0P8A3jxW/rtMac2Ph0pO6w5s+3YmeZ7R6uAWMYpnxDfPbyjF/wDkGH7L9lYC4kkFzLdbS6yAANTdarppitFdS4pwROX3I7ua7bsjgN2BzRzkcAa57ov+iw9uv3d9eNk1u0a/u582KxEzt0OIHEMFfXVY3tSkMcmOKxpnwfZ+R5stOepOq5MnMrDn9t3ML2b3c3Lkty5tOoZRSGht3aseE/ZQgPnI0+7GPif+nFd/E4tsv4reHPlya7R5eTdG57i+Rxc93mJ1PToOi9ulIrGo8OaZ+XS2SWscXEhoAIz5caW2HNklt4OV2IndJunMtawVnQyH+dV53Iv1X7PKzW3MvsMUQja1jb3WNDRZs0BQzX1WKkUrFY+HlzO5MrYxQVkxlBVhElVElVAqgUUwgsKKoLFksKK3NmttxPwtJ+en6ry/VsnTx5j7uzh13k39mDGtBJXwOa+pfTYZmIeI7ZbMDgw0CPED9KXdwr9WOdeYn+76D03NW3VWzyUezo234AL1rIrr9y3zL1vax/EJk2Y37skw9JHj+qy9yWqeNjn4/dg/0k/+6f8A+jlfen7Qx/g8f3n9WbD7MY057z+jyXD2Kk5LS2VwY6R2/dsS7LicQXRsFaWAPoP0TqudOOfMRJiJjPI0DrQCa+6714jQw+FfO8MYN5x9mjmVry5q443LkzZYp3l7jZPZ1kLQKt2rnEZkrwc3Ivktt5GTlbl1W4NreC0d5aJzTLzPbPa/2WKmUZX+FgOgPFx6D9BxXq+m8X3r9/ELe/TX83zeNurnEue4lznHMuJ4lfUxWIjUObYJWbXaW/2fwX2iYX5GZ9C5cXKy6jph5vLz9umHu+ybhLi3R92NyEPNnO3NBpw5Z/krwsUddZn8mn+G/wBqbzPw9mV9S8hBWTFBVRJVRJVRJVQKoEUwoKCiqCxVYUZM0c+419au3QPqvD9drf2Ymsb7vT9L6ZyzFpeO2x2mkjndh4oj3jQHOfKD3ZsA02jZNEcuK+aw+mRef92dT9vl79OTjtbpq4mJ7RYh/gnELmX4gyNzXD0JcV3YuBTDMzTb0MGSKWi0MTXteLaQ4fl68ljakxPd7+LLW8brKmsHwj3Kx6YbJmfuysg/C3/sf6rKKw1zf85ZBh3cL/hAb+Sy6ZYddflhlwxbqD7ZrTbLSvy2RlhsbP2BLiCMixnEnzH0XHl5f/WHHyObWkaiXtNlbFjwzaYM+J4uPMleZkta87l4WXk2vLoFtLX0tETtr4l1Aq6bscbl8g7WY3v8U/Pwx+BvqPMffL5L630/D7eGPvPdM07s5eGhfM4RxN3nceAb1J4LpyZq443Zy5s9ccd29iuy2JA3g5rmjz7ocK+a5f46tu2tPMyczq7R2eg7PYQQMo68Vx5MnVLitO3p+xcAaZpOL98/InL817PCpu1YetyJ6ONqfs9GV9C+dQVUSVWKCskSVUJUCIEAFFUFFUFFWFFhQWKuVtnZjJ7sU+gQ4agjL+i+U9UmcXM6o+Yif/TrwZbUmJj4fPNowuie5jxRBOfA3oVspmrkj830nF5dMkfm0JIuIJB5tJB9wtnaXbEzE7idIOIxLfJKf4g135grH26T8NscnNH/ACI4/GHLv3Do1rB+TVfbqk8nJPmWF7MQ8h0kkxo2N57rB5jPJPbhhOWbOvs7auNjqn96wfdnqQfzHxexXNk4OG/xr+XZIyTHh7DZHbSMU2dndHS2XIw/KrH1Xm5vTMte+Od/lLVevU9Xh8ayVoexzXtP3mkEenqvLyRak6vGpauhTpFq2yirh9osf3UMj9S1pofEeAW3j4/cyRHw3xMY6Tefh8WczEPd4m7tmyTxJ1K+snNSI7PGyczf0vW7KYMHhpJa8Yad29XyHIX86XnXmcuSNuH8Wa8RLQ2LtTHQkHvjIOLZWhw+lEe63ZMWO3xr+T0P4Glvh2hizIcmNjvUNJI+QOilMNYnv3Z4/TqUnqmdvcdnYCyEE5b2novofT8Oo65/o4PVM8Tb24+PLplek8hBWTGUlWEQVUIqoSqBAIAKKYRVBQWFiqgVGTFiWk0R6HkAeJXz/rvFtelclPMdp/lLZSXLx8uHYWRSlo707gBF2TpvdOpXzEY7TO4+Pl1Ux5JjqrHh5jbXZxzCTBQ/A690+h4Lsw82adru3D6hekat3cuPs3jHtLi1jK0GbifZdM+oY48d3T/qdfs05YpYspGGhxZ4v7/RbqcrHf5dNOdjt57IdtTDN87tODjmumLb8Nk8nH/2hlZjXSf8fDvcOdbrfc6rXfkY6fVLVbl44+Sl+2Af7LR6vC1fxuL7tU86jXwcm0Y5N6GoXcXh92ORbVOHQrXlz4L11bu1258/EPbx9qpMPBv4xjZKAAdF+zfI46DdNi/ZeT/CY8t9U7GHnXm3Trbzm0O2WIlkDoIYmxgUWzjvS/TWiA36rrxcPFjjvMzP6OrkTOekUntCTjY5fEcKY5OIjlBjceYBbbfTNbPbn7uKPT7b7WKZj5q3gA1vlYNAeZ5lZ1itXocfh1x/zZosMBwV6nZFdPQ9n9iGUiR4qMe8nQdOq9DhcScs9Vvp/u83n86uGOmv1f2exAoUMgMgOS+hiIiNQ+XmZmdyklZMUlVElVElVElVAqgQCAQNRTCiqCiqBUVYKkwribe2cHnvKu8ndDzXgeq8aa/7lfHy+j9H5NbR7N/MeGg7aEsYAdH3wbod/ddXImjfqvnbYK2nzp08j0itrdWOdfk4e2NoY/FeBjjhovhhcWvI6yDP2pbsePHj763P5/4a8fpcV8927gonzsDZaM7RTnUB3o+P15+/HLnyx0zuvhxcviWwTv8A4/2X/oY+8wH1CwnLaHFMltTHswDWtZEJZ3CwwkhkbfifWfy4rPDi9yd28N/H4983f4amF21JJ/yMMwA/fgtpb6se4h3uFtvxq/8AGXZPp1tfhn9W+yTDDPevp3cgN8vLX1WmMN9tP8DyN66f3cja8DsW9vhLImeRp1s6uPVdeKsUh6fF4Htx38lFsgN4LLrehGGIZ24MDgp1M+iIZocG55DWtJJ0AFrKlbXnVY3KXtWkdVp1D0OzOzrW06aieDBoP3jx9F7fF9M/5Zf0/wAvn+Z6vvdcP6/4d7TIZAaDgF7MRERqHgzMzO5IlZMUkqpKSVUQVUIqoSoEQIBAIBRTCCgVFUCoqgVFM55HMHXqsbVi0alnW01mJjy5mK2bxZmPh4j05r5zmelWr+LD3j7fL6jg+tUtEUz9p+/xP+GiYANRmvFtW0TqXvVtW0br3gxhgaOhGhGRCkQl4raNWjs2QJKrf/6tJ/JZRjrLzZ9N4u99P7y1hsZhcXOtzibJJsk9St0R8OqtaUjUQ2G7OYPuhTpZdYdgm/CE0vVEsEmHAUmWcIZgHv8AK0nroPcrbi42bL9FZaM3LwYfrtH/ALbmH2CNZHfwt/Vepg9Inzln+kPG5HrkeMNf6z/h1YIGRimNDR01PqeK9jDx8eKNUjTw8/Jy5p3knbISt7nSSqiSVUSSqiSVUSVUJAKoEAgEAgEAophRVAoKBUUwVFUCopPY13mAK05ePjy/XWJb8PJy4p3S0wwnBM4WPQ/qvPv6Pgn6dw9HH63yK/VqQMJWjvotE+jR8X/Z0R65PzT91DDn4h/L/dT/AEi3/f8AZf8AWq/9P3P7P+L6LOPSI+b/ALMJ9an4p+5/ZW8S4/OvyW6vpWGPO5/+/k0W9Y5E/TqP6f5WyFjdGj2s+66sfEw0+msOPJzeRk+q8slrp05itXSESgklVCJVRJKqJJVQiUEqoFUCAQCAQCAQCKFA1FUCgYKiqtQO0XZ2op2gdqAtFFoC0CtVCtArVTZWgRKqJJVQigSqEqBECAQCAQCAQCARQoGgdqKoFA7UU7UBaKdobFouxaJsWhsrQFohWroK0E2qhKoSAVAiBAIBAIBAIBAIBAIBRTQFqKdoHaB2oC00otNAtNAtNAtArVQrQFoEqhIBVAgEAgEAgEAgEAgEAgEAgEUKBoBA7UUWgLQFoC0BaBWqgQJAKgRAgEAgEAgEAgEAgEAgEAgEAgEAihAKAQFoC0AgEAqBECAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCD/9k=",
    bgColor: "bg-amber-500",
  },

  {
    id: 2,
    title: "Classy Burger",
    Catagory: "delighs",
    price: "150.00",
    description: "Delicious Mexican burger with a side of fries",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Svx5IaRd0qWzE5W7LwnWDkwT1nBjs4SmHg&s",
    bgColor: "bg-teal-500",
  },

  {
    id: 3,
    title: "Family Burger",
    Catagory: "fixing",
    price: "400.00",
    description: "Delicious Mexican burger with a side of fries",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Svx5IaRd0qWzE5W7LwnWDkwT1nBjs4SmHg&s",
    bgColor: "bg-amber-500",
  },
];
export default function ProductList() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="{`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lggroup max-w-sm`}"
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>

          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: "radial-gradient(black, transparent 50%",
                transform: "rotate3d(0,0,1,20deg) scale3d(1,0.6,1",
                opacity: 0.2,
              }}
            ></div>

            <img
              className="relative w-50"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>

          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75-mb-1">(product.category) </span>

            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
                (product.title)
              </span>
              <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center">
                (product.price)
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
