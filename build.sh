rm -rf dist-npm
rm -rf build
rm -rf tmp

npm run build:esm
node node_modules/.bin/ngc -p ./tsconfig-build.json
node node_modules/.bin/rollup build/product-cart.js -o dist-npm/product-cart.js -f umd --name "product-cart"

rsync -a --exclude=*.js build/ dist-npm
cp src/package.json dist-npm/package.json
