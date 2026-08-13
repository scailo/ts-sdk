[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionsServicePaginationResponse

# Class: QuestionnaireSectionsServicePaginationResponse

Response message for paginated queries, including total counts for UI elements.

**`Generated`**

from message Scailo.QuestionnaireSectionsServicePaginationResponse

## Hierarchy

- `Message`\<[`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)\>

  ↳ **`QuestionnaireSectionsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionsServicePaginationResponse.md#constructor)

### Properties

- [count](QuestionnaireSectionsServicePaginationResponse.md#count)
- [offset](QuestionnaireSectionsServicePaginationResponse.md#offset)
- [payload](QuestionnaireSectionsServicePaginationResponse.md#payload)
- [total](QuestionnaireSectionsServicePaginationResponse.md#total)
- [fields](QuestionnaireSectionsServicePaginationResponse.md#fields)
- [runtime](QuestionnaireSectionsServicePaginationResponse.md#runtime)
- [typeName](QuestionnaireSectionsServicePaginationResponse.md#typename)

### Methods

- [clone](QuestionnaireSectionsServicePaginationResponse.md#clone)
- [equals](QuestionnaireSectionsServicePaginationResponse.md#equals)
- [fromBinary](QuestionnaireSectionsServicePaginationResponse.md#frombinary)
- [fromJson](QuestionnaireSectionsServicePaginationResponse.md#fromjson)
- [fromJsonString](QuestionnaireSectionsServicePaginationResponse.md#fromjsonstring)
- [getType](QuestionnaireSectionsServicePaginationResponse.md#gettype)
- [toBinary](QuestionnaireSectionsServicePaginationResponse.md#tobinary)
- [toJSON](QuestionnaireSectionsServicePaginationResponse.md#tojson)
- [toJson](QuestionnaireSectionsServicePaginationResponse.md#tojson-1)
- [toJsonString](QuestionnaireSectionsServicePaginationResponse.md#tojsonstring)
- [equals](QuestionnaireSectionsServicePaginationResponse.md#equals-1)
- [fromBinary](QuestionnaireSectionsServicePaginationResponse.md#frombinary-1)
- [fromJson](QuestionnaireSectionsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionsServicePaginationResponse**(`data?`): [`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)\> |

#### Returns

[`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)

#### Overrides

Message\&lt;QuestionnaireSectionsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:834](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L834)

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

[src/questionnaire_sections.scailo_pb.ts:804](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L804)

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

[src/questionnaire_sections.scailo_pb.ts:814](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L814)

___

### payload

• **payload**: [`QuestionnaireSection`](QuestionnaireSection.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.QuestionnaireSection payload = 4;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L832)

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

[src/questionnaire_sections.scailo_pb.ts:824](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L824)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:841](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L841)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:839](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L839)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionsServicePaginationResponse"``

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:840](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L840)

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md) \| `PlainMessage`\<[`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md) \| `PlainMessage`\<[`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md) \| `PlainMessage`\<[`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L860)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:848](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L848)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:852](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L852)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServicePaginationResponse`](QuestionnaireSectionsServicePaginationResponse.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:856](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_sections.scailo_pb.ts#L856)
