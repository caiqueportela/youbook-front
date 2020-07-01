import { ArticleOwnerOnlyDirective } from './article-owner-only.directive';

describe('ArticleOwnerOnlyDirective', () => {
  it('should create an instance', () => {
    const directive = new ArticleOwnerOnlyDirective();
    expect(directive).toBeTruthy();
  });
});
