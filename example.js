function Component() {
  return (
    <>
      string literal{' '}
      <Button stringAttr="hello" templateAttr={`hello ${name}`} />
    </>
  );
}
