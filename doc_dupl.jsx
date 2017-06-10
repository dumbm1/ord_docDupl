/**
 * Adobe ExtendScript for Illustrator
 * (c)Marat Shagiev
 * m_js@bk.ru
 * 10.06.2017
 * */

//@target illustrator

(function doc_dupl() {
  var doc             = activeDocument,
      docPath         = doc.fullName + '',
      docFile         = new File(docPath),
      docFileCopyPath = docPath.slice(0, -3) + '_copy.ai',
      docFileCopy     = new File(docFileCopyPath);

  if (!doc.saved) doc.save();

  docFile.copy(docFileCopyPath);
  open(docFileCopy);
}());