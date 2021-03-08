import * as types from '../constants/actionTypes';
const initialState = {
  id: 45321,
  uid: 'a4gjk205934f',
  userName: 'Annonymous205934',
  title: 'Testing Post',
  body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque laoreet quam rhoncus quam convallis interdum. Etiam sem diam, molestie et lectus quis, mollis sagittis turpis. Vestibulum id hendrerit lorem. Donec nec risus ligula. Quisque congue et nunc id tempor. Curabitur ornare mattis mollis. Morbi eu urna quis quam fermentum gravida in non ex. Donec porttitor erat at ligula iaculis suscipit. Praesent dui odio, tempus ac dapibus maximus, consequat eu risus. Etiam congue sem et velit elementum tempor. Sed pellentesque laoreet nisi. Mauris id mollis mi, at iaculis dui. Ut faucibus eu magna at tincidunt.

  Phasellus vitae sem non arcu faucibus luctus et et erat. Nullam vehicula urna sit amet tellus porta porttitor. Nulla viverra felis sed lectus molestie imperdiet. Nullam dapibus odio arcu, dictum congue diam convallis ac. Morbi placerat rhoncus mauris a tincidunt. Donec non dui nibh. Vivamus sed lacus ac ipsum tincidunt aliquam. Nulla mollis diam sit amet orci sodales, tristique luctus libero auctor. Mauris laoreet enim sit amet fringilla bibendum. Proin scelerisque velit nec sem eleifend tempor. Nunc dignissim quam laoreet, volutpat sem ac, pharetra metus. In molestie commodo est a consectetur.
  
  Vivamus tincidunt est a mauris porta, vitae facilisis felis sollicitudin. Proin ullamcorper felis massa, at semper urna maximus porttitor. Quisque a cursus lectus. Pellentesque sodales arcu sit amet euismod sagittis. Quisque tincidunt pretium magna sed volutpat. Phasellus in scelerisque ipsum. Maecenas porttitor consequat metus. Morbi auctor tortor lorem, sit amet bibendum nulla egestas posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum at imperdiet ante. Aliquam a porttitor lacus. Aenean imperdiet tellus vel justo ullamcorper, quis volutpat risus feugiat. Donec aliquet aliquet est, vitae varius nisl lobortis varius. Phasellus sodales tristique ex eget maximus.
  
  Nullam tristique tellus et est dapibus, elementum vehicula nibh aliquet. Cras consectetur tellus suscipit, lacinia sapien vel, porta risus. Etiam ut libero nibh. Maecenas ac hendrerit purus. Fusce non tortor ut ex faucibus rhoncus. Integer turpis est, facilisis ultricies est at, gravida rhoncus turpis. Vestibulum vel leo condimentum, posuere metus vel, fermentum neque. Maecenas non condimentum purus, ac lobortis sem. Ut ullamcorper viverra aliquet. Nulla ullamcorper ante id vehicula interdum. Vivamus id odio eleifend, dictum lacus a, consectetur neque. Vestibulum lobortis iaculis bibendum. Sed vel commodo nunc.
  
  In ut odio lobortis, facilisis nisl vel, molestie libero. Suspendisse potenti. Vestibulum non facilisis nulla. Sed sit amet turpis lobortis augue sodales venenatis. Donec aliquam eu risus tincidunt consequat. Donec volutpat laoreet eros sit amet ultricies. Vestibulum a porta eros. Integer iaculis pulvinar neque porta ullamcorper. Praesent sed risus sit amet ipsum ornare vehicula. Ut lacus turpis, consequat ut nisi sit amet, mattis dictum odio. Aliquam lobortis hendrerit justo, eu porta libero tristique quis. Nullam venenatis semper metus, quis tincidunt risus lobortis et.
  
  Ut volutpat, elit id lacinia iaculis, augue massa sollicitudin metus, at auctor dui tellus at turpis. Nam vel lorem quis sem tempor consectetur id eu est. Praesent ut porta elit, vel scelerisque arcu. Morbi vestibulum, mauris nec cursus cursus, nisl nibh scelerisque elit, tristique dignissim massa ipsum id nulla. Cras et elit feugiat, semper magna eu, finibus elit. Nulla elit dui, ultricies ut elit at, facilisis scelerisque diam. Mauris tincidunt tortor eget tellus vulputate, dignissim finibus orci hendrerit. Integer leo justo, congue ac dui in, ullamcorper facilisis ex. Ut sit amet sapien vel dolor cursus elementum. Morbi et tincidunt urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eu nisl maximus, dictum eros a, ornare ante. Nullam quis condimentum ante. Fusce nec tempus lectus. Nulla vitae molestie libero. Interdum et malesuada fames ac ante ipsum primis in faucibus.
  
  Integer ipsum ipsum, viverra ultrices suscipit in, vestibulum sit amet sem. Suspendisse pharetra ligula in mollis faucibus. Suspendisse gravida tristique semper. Etiam viverra finibus tortor in congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent dapibus ornare neque sit amet volutpat. Curabitur nec tristique enim. Proin eget auctor massa. Aliquam vel scelerisque justo. Curabitur ultricies elit libero, at interdum lacus auctor in. Aliquam aliquam sapien nulla, et fermentum arcu posuere et. Quisque volutpat iaculis elementum. Morbi ac ultricies neque, id rutrum magna. Praesent et dictum tellus. In porttitor ac nisi vitae volutpat. Integer consectetur augue a rhoncus luctus.
  
  Fusce ut mauris vel eros finibus sodales vehicula et ante. Suspendisse elementum, metus sit amet gravida egestas, lacus lectus tempus risus, eget auctor quam orci vitae mauris. Nunc tristique quam sed velit condimentum, quis ornare purus accumsan. Pellentesque neque arcu, sollicitudin eget semper hendrerit, semper et velit. Aliquam gravida tellus lacus, eget blandit elit scelerisque in. Donec ullamcorper dolor nec lacus egestas, id condimentum orci consequat. Cras at aliquet orci, in porttitor leo. Aenean convallis accumsan quam vel euismod. Donec scelerisque ipsum enim, ac dictum metus feugiat in. Fusce malesuada, dolor sed dapibus eleifend, ligula quam rutrum orci, ut hendrerit elit nunc et orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id interdum ex, vitae sodales lorem. Proin pretium est vel consequat pretium. Fusce justo odio, dapibus id massa et, iaculis luctus nisl. Nullam tincidunt ac velit sit amet pellentesque. Fusce placerat placerat justo nec imperdiet.`,
  // commentList: [],
  // numberOfComments: 1,
  createdAt: new Date(),
};
const marketsReducer = (state = initialState, action) => {
  let commentList;
  switch (action.type) {
    // case types.ADD_NEW_COMMENT: {
    // }
    default: {
      console.log('initial state mounted!');
      return state;
    }
  }
};

export default marketsReducer;
