[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireTemplatesServicePaginationResponse

# Class: QuestionnaireTemplatesServicePaginationResponse

Response message for paginated queries, including total counts for UI elements.

**`Generated`**

from message Scailo.QuestionnaireTemplatesServicePaginationResponse

## Hierarchy

- `Message`\<[`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)\>

  ↳ **`QuestionnaireTemplatesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](QuestionnaireTemplatesServicePaginationResponse.md#constructor)

### Properties

- [count](QuestionnaireTemplatesServicePaginationResponse.md#count)
- [offset](QuestionnaireTemplatesServicePaginationResponse.md#offset)
- [payload](QuestionnaireTemplatesServicePaginationResponse.md#payload)
- [total](QuestionnaireTemplatesServicePaginationResponse.md#total)
- [fields](QuestionnaireTemplatesServicePaginationResponse.md#fields)
- [runtime](QuestionnaireTemplatesServicePaginationResponse.md#runtime)
- [typeName](QuestionnaireTemplatesServicePaginationResponse.md#typename)

### Methods

- [clone](QuestionnaireTemplatesServicePaginationResponse.md#clone)
- [equals](QuestionnaireTemplatesServicePaginationResponse.md#equals)
- [fromBinary](QuestionnaireTemplatesServicePaginationResponse.md#frombinary)
- [fromJson](QuestionnaireTemplatesServicePaginationResponse.md#fromjson)
- [fromJsonString](QuestionnaireTemplatesServicePaginationResponse.md#fromjsonstring)
- [getType](QuestionnaireTemplatesServicePaginationResponse.md#gettype)
- [toBinary](QuestionnaireTemplatesServicePaginationResponse.md#tobinary)
- [toJSON](QuestionnaireTemplatesServicePaginationResponse.md#tojson)
- [toJson](QuestionnaireTemplatesServicePaginationResponse.md#tojson-1)
- [toJsonString](QuestionnaireTemplatesServicePaginationResponse.md#tojsonstring)
- [equals](QuestionnaireTemplatesServicePaginationResponse.md#equals-1)
- [fromBinary](QuestionnaireTemplatesServicePaginationResponse.md#frombinary-1)
- [fromJson](QuestionnaireTemplatesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](QuestionnaireTemplatesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireTemplatesServicePaginationResponse**(`data?`): [`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)\> |

#### Returns

[`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)

#### Overrides

Message\&lt;QuestionnaireTemplatesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:842](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L842)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:812](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L812)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:822](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L822)

___

### payload

• **payload**: [`QuestionnaireTemplate`](QuestionnaireTemplate.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.QuestionnaireTemplate payload = 4;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:840](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L840)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L832)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:849](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L849)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:847](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L847)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireTemplatesServicePaginationResponse"``

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:848](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L848)

## Methods

### clone

▸ **clone**(): [`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L868)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:856](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L856)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L860)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServicePaginationResponse`](QuestionnaireTemplatesServicePaginationResponse.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:864](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_templates.scailo_pb.ts#L864)
