/* eslint-disable no-fallthrough */
export default async function tiles([x, y]) {
  switch (x) {
    case '0':
      switch (y) {
        case '8':
          return await import('./0/8.json');
        case '14':
          return await import('./0/14.json');
        case '15':
          return await import('./0/15.json');
        case '16':
          return await import('./0/16.json');
        case '17':
          return await import('./0/17.json');
      }
    case '1':
      switch (y) {
        case '15':
          return await import('./1/15.json');
        case '16':
          return await import('./1/16.json');
      }
    case '3':
      switch (y) {
        case '7':
          return await import('./3/7.json');
        case '8':
          return await import('./3/8.json');
        case '9':
          return await import('./3/9.json');
      }
    case '4':
      switch (y) {
        case '9':
          return await import('./4/9.json');
        case '10':
          return await import('./4/10.json');
        case '11':
          return await import('./4/11.json');
      }
    case '5':
      switch (y) {
        case '10':
          return await import('./5/10.json');
        case '11':
          return await import('./5/11.json');
        case '12':
          return await import('./5/12.json');
        case '13':
          return await import('./5/13.json');
      }
    case '6':
      switch (y) {
        case '10':
          return await import('./6/10.json');
        case '13':
          return await import('./6/13.json');
      }
    case '7':
      switch (y) {
        case '10':
          return await import('./7/10.json');
        case '11':
          return await import('./7/11.json');
        case '13':
          return await import('./7/13.json');
        case '14':
          return await import('./7/14.json');
      }
    case '8':
      switch (y) {
        case '11':
          return await import('./8/11.json');
        case '13':
          return await import('./8/13.json');
        case '14':
          return await import('./8/14.json');
        case '15':
          return await import('./8/15.json');
        case '16':
          return await import('./8/16.json');
      }
    case '9':
      switch (y) {
        case '3':
          return await import('./9/3.json');
        case '4':
          return await import('./9/4.json');
        case '11':
          return await import('./9/11.json');
        case '14':
          return await import('./9/14.json');
        case '15':
          return await import('./9/15.json');
        case '16':
          return await import('./9/16.json');
        case '17':
          return await import('./9/17.json');
        case '18':
          return await import('./9/18.json');
        case '19':
          return await import('./9/19.json');
        case '20':
          return await import('./9/20.json');
        case '21':
          return await import('./9/21.json');
      }
    case '10':
      switch (y) {
        case '2':
          return await import('./10/2.json');
        case '3':
          return await import('./10/3.json');
        case '11':
          return await import('./10/11.json');
        case '14':
          return await import('./10/14.json');
        case '15':
          return await import('./10/15.json');
        case '16':
          return await import('./10/16.json');
        case '17':
          return await import('./10/17.json');
        case '18':
          return await import('./10/18.json');
        case '19':
          return await import('./10/19.json');
        case '21':
          return await import('./10/21.json');
      }
    case '11':
      switch (y) {
        case '11':
          return await import('./11/11.json');
        case '15':
          return await import('./11/15.json');
        case '18':
          return await import('./11/18.json');
        case '19':
          return await import('./11/19.json');
      }
    case '14':
      switch (y) {
        case '13':
          return await import('./14/13.json');
        case '14':
          return await import('./14/14.json');
        case '15':
          return await import('./14/15.json');
      }
    case '15':
      switch (y) {
        case '10':
          return await import('./15/10.json');
        case '11':
          return await import('./15/11.json');
        case '12':
          return await import('./15/12.json');
        case '13':
          return await import('./15/13.json');
        case '14':
          return await import('./15/14.json');
        case '15':
          return await import('./15/15.json');
      }
    case '16':
      switch (y) {
        case '9':
          return await import('./16/9.json');
        case '10':
          return await import('./16/10.json');
        case '11':
          return await import('./16/11.json');
        case '12':
          return await import('./16/12.json');
        case '13':
          return await import('./16/13.json');
        case '14':
          return await import('./16/14.json');
        case '15':
          return await import('./16/15.json');
        case '16':
          return await import('./16/16.json');
      }
    case '17':
      switch (y) {
        case '7':
          return await import('./17/7.json');
        case '8':
          return await import('./17/8.json');
        case '9':
          return await import('./17/9.json');
        case '10':
          return await import('./17/10.json');
        case '11':
          return await import('./17/11.json');
        case '12':
          return await import('./17/12.json');
        case '13':
          return await import('./17/13.json');
        case '14':
          return await import('./17/14.json');
        case '15':
          return await import('./17/15.json');
        case '16':
          return await import('./17/16.json');
        case '17':
          return await import('./17/17.json');
        case '18':
          return await import('./17/18.json');
      }
    case '18':
      switch (y) {
        case '7':
          return await import('./18/7.json');
        case '8':
          return await import('./18/8.json');
        case '9':
          return await import('./18/9.json');
        case '10':
          return await import('./18/10.json');
        case '11':
          return await import('./18/11.json');
        case '12':
          return await import('./18/12.json');
        case '13':
          return await import('./18/13.json');
        case '14':
          return await import('./18/14.json');
        case '15':
          return await import('./18/15.json');
        case '16':
          return await import('./18/16.json');
        case '17':
          return await import('./18/17.json');
        case '18':
          return await import('./18/18.json');
      }
    case '19':
      switch (y) {
        case '10':
          return await import('./19/10.json');
        case '11':
          return await import('./19/11.json');
        case '12':
          return await import('./19/12.json');
        case '13':
          return await import('./19/13.json');
        case '14':
          return await import('./19/14.json');
        case '15':
          return await import('./19/15.json');
        case '16':
          return await import('./19/16.json');
        case '17':
          return await import('./19/17.json');
      }
    case '20':
      switch (y) {
        case '10':
          return await import('./20/10.json');
        case '11':
          return await import('./20/11.json');
        case '12':
          return await import('./20/12.json');
        case '13':
          return await import('./20/13.json');
        case '14':
          return await import('./20/14.json');
        case '15':
          return await import('./20/15.json');
      }
    case '21':
      switch (y) {
        case '10':
          return await import('./21/10.json');
        case '11':
          return await import('./21/11.json');
        case '12':
          return await import('./21/12.json');
        case '13':
          return await import('./21/13.json');
      }
    case '22':
      switch (y) {
        case '10':
          return await import('./22/10.json');
        case '11':
          return await import('./22/11.json');
        case '12':
          return await import('./22/12.json');
        case '13':
          return await import('./22/13.json');
        case '21':
          return await import('./22/21.json');
      }
    case '23':
      switch (y) {
        case '10':
          return await import('./23/10.json');
        case '11':
          return await import('./23/11.json');
        case '12':
          return await import('./23/12.json');
        case '13':
          return await import('./23/13.json');
        case '14':
          return await import('./23/14.json');
        case '15':
          return await import('./23/15.json');
      }
    case '24':
      switch (y) {
        case '10':
          return await import('./24/10.json');
        case '11':
          return await import('./24/11.json');
        case '13':
          return await import('./24/13.json');
        case '14':
          return await import('./24/14.json');
        case '15':
          return await import('./24/15.json');
        case '17':
          return await import('./24/17.json');
      }
    case '25':
      switch (y) {
        case '10':
          return await import('./25/10.json');
        case '11':
          return await import('./25/11.json');
        case '13':
          return await import('./25/13.json');
        case '14':
          return await import('./25/14.json');
        case '15':
          return await import('./25/15.json');
        case '16':
          return await import('./25/16.json');
      }
    case '26':
      switch (y) {
        case '10':
          return await import('./26/10.json');
        case '11':
          return await import('./26/11.json');
        case '13':
          return await import('./26/13.json');
        case '14':
          return await import('./26/14.json');
        case '15':
          return await import('./26/15.json');
      }
    case '27':
      switch (y) {
        case '10':
          return await import('./27/10.json');
        case '11':
          return await import('./27/11.json');
        case '12':
          return await import('./27/12.json');
        case '15':
          return await import('./27/15.json');
        case '16':
          return await import('./27/16.json');
      }
    case '28':
      switch (y) {
        case '11':
          return await import('./28/11.json');
        case '16':
          return await import('./28/16.json');
      }
    case '29':
      switch (y) {
        case '16':
          return await import('./29/16.json');
      }
    case '30':
      switch (y) {
        case '14':
          return await import('./30/14.json');
        case '17':
          return await import('./30/17.json');
        case '18':
          return await import('./30/18.json');
      }
    case '31':
      switch (y) {
        case '17':
          return await import('./31/17.json');
      }
    case 'worldgrid':
      return await import('./worldgrid.json');
  }
}
