

install:
		npm ci
brain-games2:
		node bin/brain-games.js	
publish:
		npm publish --dry-run	
lint:
		npx eslint .		
even-games:
		node bin/brain-even.js