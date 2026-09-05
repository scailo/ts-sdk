[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionsServicePaginatedConditionalRulesResponse

# Class: QuestionnaireSectionsServicePaginatedConditionalRulesResponse

Paginated response packet containing a subset of Questionnaire Section Conditional Rule records.
Includes complete operational state parameters for rendering frontend data grids and tables.

**`Generated`**

from message Scailo.QuestionnaireSectionsServicePaginatedConditionalRulesResponse

## Hierarchy

- `Message`\<[`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)\>

  ↳ **`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#constructor)

### Properties

- [count](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#count)
- [offset](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#offset)
- [payload](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#payload)
- [total](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#total)
- [fields](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#fields)
- [runtime](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#runtime)
- [typeName](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#typename)

### Methods

- [clone](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#clone)
- [equals](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#equals)
- [fromBinary](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#frombinary)
- [fromJson](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#fromjson)
- [fromJsonString](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#fromjsonstring)
- [getType](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#gettype)
- [toBinary](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#tobinary)
- [toJSON](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#tojson)
- [toJson](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#tojson-1)
- [toJsonString](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#tojsonstring)
- [equals](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#equals-1)
- [fromBinary](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#frombinary-1)
- [fromJson](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionsServicePaginatedConditionalRulesResponse**(`data?`): [`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)\> |

#### Returns

[`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)

#### Overrides

Message\&lt;QuestionnaireSectionsServicePaginatedConditionalRulesResponse\&gt;.constructor

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3505](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3505)

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

[src/questionnaire_sections.scailo_pb.ts:3475](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3475)

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

[src/questionnaire_sections.scailo_pb.ts:3485](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3485)

___

### payload

• **payload**: [`QuestionnaireSectionConditionalRule`](QuestionnaireSectionConditionalRule.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.QuestionnaireSectionConditionalRule payload = 4;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3503](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3503)

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

[src/questionnaire_sections.scailo_pb.ts:3495](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3495)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3512](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3512)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3510](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3510)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionsServicePaginatedConditionalRulesResponse"``

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3511](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3511)

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md) \| `PlainMessage`\<[`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md) \| `PlainMessage`\<[`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md) \| `PlainMessage`\<[`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3531](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3531)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3519](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3519)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3523](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3523)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServicePaginatedConditionalRulesResponse`](QuestionnaireSectionsServicePaginatedConditionalRulesResponse.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:3527](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L3527)
