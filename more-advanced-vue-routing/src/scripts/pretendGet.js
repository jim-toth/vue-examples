export default (cb) => {
  setTimeout(() => {
    cb(null, 'Alice')
  }, 2500);
}
