(function() {var implementors = {};
implementors["memchr"] = [{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"memchr/struct.Memchr.html\" title=\"struct memchr::Memchr\">Memchr</a>&lt;'a&gt;","synthetic":true,"types":["memchr::memchr::iter::Memchr"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"memchr/struct.Memchr2.html\" title=\"struct memchr::Memchr2\">Memchr2</a>&lt;'a&gt;","synthetic":true,"types":["memchr::memchr::iter::Memchr2"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"memchr/struct.Memchr3.html\" title=\"struct memchr::Memchr3\">Memchr3</a>&lt;'a&gt;","synthetic":true,"types":["memchr::memchr::iter::Memchr3"]},{"text":"impl Freeze for <a class=\"enum\" href=\"memchr/memmem/enum.Prefilter.html\" title=\"enum memchr::memmem::Prefilter\">Prefilter</a>","synthetic":true,"types":["memchr::memmem::prefilter::Prefilter"]},{"text":"impl&lt;'h, 'n&gt; Freeze for <a class=\"struct\" href=\"memchr/memmem/struct.FindIter.html\" title=\"struct memchr::memmem::FindIter\">FindIter</a>&lt;'h, 'n&gt;","synthetic":true,"types":["memchr::memmem::FindIter"]},{"text":"impl&lt;'h, 'n&gt; Freeze for <a class=\"struct\" href=\"memchr/memmem/struct.FindRevIter.html\" title=\"struct memchr::memmem::FindRevIter\">FindRevIter</a>&lt;'h, 'n&gt;","synthetic":true,"types":["memchr::memmem::FindRevIter"]},{"text":"impl&lt;'n&gt; Freeze for <a class=\"struct\" href=\"memchr/memmem/struct.Finder.html\" title=\"struct memchr::memmem::Finder\">Finder</a>&lt;'n&gt;","synthetic":true,"types":["memchr::memmem::Finder"]},{"text":"impl&lt;'n&gt; Freeze for <a class=\"struct\" href=\"memchr/memmem/struct.FinderRev.html\" title=\"struct memchr::memmem::FinderRev\">FinderRev</a>&lt;'n&gt;","synthetic":true,"types":["memchr::memmem::FinderRev"]},{"text":"impl Freeze for <a class=\"struct\" href=\"memchr/memmem/struct.FinderBuilder.html\" title=\"struct memchr::memmem::FinderBuilder\">FinderBuilder</a>","synthetic":true,"types":["memchr::memmem::FinderBuilder"]}];
implementors["nom"] = [{"text":"impl&lt;I&gt; Freeze for <a class=\"struct\" href=\"nom/error/struct.Error.html\" title=\"struct nom::error::Error\">Error</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":["nom::error::Error"]},{"text":"impl&lt;I&gt; Freeze for <a class=\"struct\" href=\"nom/error/struct.VerboseError.html\" title=\"struct nom::error::VerboseError\">VerboseError</a>&lt;I&gt;","synthetic":true,"types":["nom::error::VerboseError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"nom/error/enum.VerboseErrorKind.html\" title=\"enum nom::error::VerboseErrorKind\">VerboseErrorKind</a>","synthetic":true,"types":["nom::error::VerboseErrorKind"]},{"text":"impl Freeze for <a class=\"enum\" href=\"nom/error/enum.ErrorKind.html\" title=\"enum nom::error::ErrorKind\">ErrorKind</a>","synthetic":true,"types":["nom::error::ErrorKind"]},{"text":"impl&lt;I, E, F&gt; Freeze for <a class=\"struct\" href=\"nom/combinator/struct.ParserIterator.html\" title=\"struct nom::combinator::ParserIterator\">ParserIterator</a>&lt;I, E, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Freeze,&nbsp;</span>","synthetic":true,"types":["nom::combinator::ParserIterator"]},{"text":"impl Freeze for <a class=\"enum\" href=\"nom/enum.Needed.html\" title=\"enum nom::Needed\">Needed</a>","synthetic":true,"types":["nom::internal::Needed"]},{"text":"impl&lt;E&gt; Freeze for <a class=\"enum\" href=\"nom/enum.Err.html\" title=\"enum nom::Err\">Err</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Freeze,&nbsp;</span>","synthetic":true,"types":["nom::internal::Err"]},{"text":"impl&lt;F, G, O1&gt; Freeze for <a class=\"struct\" href=\"nom/struct.Map.html\" title=\"struct nom::Map\">Map</a>&lt;F, G, O1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,&nbsp;</span>","synthetic":true,"types":["nom::internal::Map"]},{"text":"impl&lt;F, G, O1&gt; Freeze for <a class=\"struct\" href=\"nom/struct.FlatMap.html\" title=\"struct nom::FlatMap\">FlatMap</a>&lt;F, G, O1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,&nbsp;</span>","synthetic":true,"types":["nom::internal::FlatMap"]},{"text":"impl&lt;F, G, O1&gt; Freeze for <a class=\"struct\" href=\"nom/struct.AndThen.html\" title=\"struct nom::AndThen\">AndThen</a>&lt;F, G, O1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,&nbsp;</span>","synthetic":true,"types":["nom::internal::AndThen"]},{"text":"impl&lt;F, G&gt; Freeze for <a class=\"struct\" href=\"nom/struct.And.html\" title=\"struct nom::And\">And</a>&lt;F, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,&nbsp;</span>","synthetic":true,"types":["nom::internal::And"]},{"text":"impl&lt;F, G&gt; Freeze for <a class=\"struct\" href=\"nom/struct.Or.html\" title=\"struct nom::Or\">Or</a>&lt;F, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: Freeze,&nbsp;</span>","synthetic":true,"types":["nom::internal::Or"]},{"text":"impl&lt;F, O1, O2, E1, E2&gt; Freeze for <a class=\"struct\" href=\"nom/struct.Into.html\" title=\"struct nom::Into\">Into</a>&lt;F, O1, O2, E1, E2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["nom::internal::Into"]},{"text":"impl Freeze for <a class=\"enum\" href=\"nom/enum.CompareResult.html\" title=\"enum nom::CompareResult\">CompareResult</a>","synthetic":true,"types":["nom::traits::CompareResult"]},{"text":"impl Freeze for <a class=\"enum\" href=\"nom/number/enum.Endianness.html\" title=\"enum nom::number::Endianness\">Endianness</a>","synthetic":true,"types":["nom::number::Endianness"]}];
implementors["plist_utils"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"plist_utils/errors/enum.ParseError.html\" title=\"enum plist_utils::errors::ParseError\">ParseError</a>","synthetic":true,"types":["plist_utils::bplist::errors::ParseError"]},{"text":"impl Freeze for <a class=\"enum\" href=\"plist_utils/types/enum.Object.html\" title=\"enum plist_utils::types::Object\">Object</a>","synthetic":true,"types":["plist_utils::bplist::types::Object"]},{"text":"impl Freeze for <a class=\"struct\" href=\"plist_utils/types/struct.PList.html\" title=\"struct plist_utils::types::PList\">PList</a>","synthetic":true,"types":["plist_utils::bplist::types::PList"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()