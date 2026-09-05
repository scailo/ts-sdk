[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireSectionsServicePaginationReq

# Class: QuestionnaireSectionsServicePaginationReq

Pagination request for retrieving slices of Questionnaire Section records.

**`Generated`**

from message Scailo.QuestionnaireSectionsServicePaginationReq

## Hierarchy

- `Message`\<[`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)\>

  ↳ **`QuestionnaireSectionsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](QuestionnaireSectionsServicePaginationReq.md#constructor)

### Properties

- [count](QuestionnaireSectionsServicePaginationReq.md#count)
- [isActive](QuestionnaireSectionsServicePaginationReq.md#isactive)
- [offset](QuestionnaireSectionsServicePaginationReq.md#offset)
- [sortKey](QuestionnaireSectionsServicePaginationReq.md#sortkey)
- [sortOrder](QuestionnaireSectionsServicePaginationReq.md#sortorder)
- [status](QuestionnaireSectionsServicePaginationReq.md#status)
- [fields](QuestionnaireSectionsServicePaginationReq.md#fields)
- [runtime](QuestionnaireSectionsServicePaginationReq.md#runtime)
- [typeName](QuestionnaireSectionsServicePaginationReq.md#typename)

### Methods

- [clone](QuestionnaireSectionsServicePaginationReq.md#clone)
- [equals](QuestionnaireSectionsServicePaginationReq.md#equals)
- [fromBinary](QuestionnaireSectionsServicePaginationReq.md#frombinary)
- [fromJson](QuestionnaireSectionsServicePaginationReq.md#fromjson)
- [fromJsonString](QuestionnaireSectionsServicePaginationReq.md#fromjsonstring)
- [getType](QuestionnaireSectionsServicePaginationReq.md#gettype)
- [toBinary](QuestionnaireSectionsServicePaginationReq.md#tobinary)
- [toJSON](QuestionnaireSectionsServicePaginationReq.md#tojson)
- [toJson](QuestionnaireSectionsServicePaginationReq.md#tojson-1)
- [toJsonString](QuestionnaireSectionsServicePaginationReq.md#tojsonstring)
- [equals](QuestionnaireSectionsServicePaginationReq.md#equals-1)
- [fromBinary](QuestionnaireSectionsServicePaginationReq.md#frombinary-1)
- [fromJson](QuestionnaireSectionsServicePaginationReq.md#fromjson-1)
- [fromJsonString](QuestionnaireSectionsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireSectionsServicePaginationReq**(`data?`): [`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)\> |

#### Returns

[`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)

#### Overrides

Message\&lt;QuestionnaireSectionsServicePaginationReq\&gt;.constructor

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L938)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:886](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L886)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:870](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L870)

___

### offset

• `Optional` **offset**: `bigint`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 offset = 3;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:902](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L902)

___

### sortKey

• `Optional` **sortKey**: [`QUESTIONNAIRE_SECTION_SORT_KEY`](../enums/QUESTIONNAIRE_SECTION_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.QUESTIONNAIRE_SECTION_SORT_KEY sort_key = 5;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:924](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L924)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:914](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L914)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter results by a specific lifecycle status.

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:936](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L936)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:945](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L945)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:943](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L943)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireSectionsServicePaginationReq"``

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:944](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L944)

## Methods

### clone

▸ **clone**(): [`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md) \| `PlainMessage`\<[`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md) \| `PlainMessage`\<[`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md) \| `PlainMessage`\<[`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:966](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L966)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:954](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L954)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:958](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L958)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireSectionsServicePaginationReq`](QuestionnaireSectionsServicePaginationReq.md)

#### Defined in

[src/questionnaire_sections.scailo_pb.ts:962](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/questionnaire_sections.scailo_pb.ts#L962)
