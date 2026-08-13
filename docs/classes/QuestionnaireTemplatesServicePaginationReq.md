[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireTemplatesServicePaginationReq

# Class: QuestionnaireTemplatesServicePaginationReq

Pagination request for retrieving slices of Questionnaire Template records.

**`Generated`**

from message Scailo.QuestionnaireTemplatesServicePaginationReq

## Hierarchy

- `Message`\<[`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)\>

  ↳ **`QuestionnaireTemplatesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](QuestionnaireTemplatesServicePaginationReq.md#constructor)

### Properties

- [count](QuestionnaireTemplatesServicePaginationReq.md#count)
- [isActive](QuestionnaireTemplatesServicePaginationReq.md#isactive)
- [offset](QuestionnaireTemplatesServicePaginationReq.md#offset)
- [sortKey](QuestionnaireTemplatesServicePaginationReq.md#sortkey)
- [sortOrder](QuestionnaireTemplatesServicePaginationReq.md#sortorder)
- [status](QuestionnaireTemplatesServicePaginationReq.md#status)
- [fields](QuestionnaireTemplatesServicePaginationReq.md#fields)
- [runtime](QuestionnaireTemplatesServicePaginationReq.md#runtime)
- [typeName](QuestionnaireTemplatesServicePaginationReq.md#typename)

### Methods

- [clone](QuestionnaireTemplatesServicePaginationReq.md#clone)
- [equals](QuestionnaireTemplatesServicePaginationReq.md#equals)
- [fromBinary](QuestionnaireTemplatesServicePaginationReq.md#frombinary)
- [fromJson](QuestionnaireTemplatesServicePaginationReq.md#fromjson)
- [fromJsonString](QuestionnaireTemplatesServicePaginationReq.md#fromjsonstring)
- [getType](QuestionnaireTemplatesServicePaginationReq.md#gettype)
- [toBinary](QuestionnaireTemplatesServicePaginationReq.md#tobinary)
- [toJSON](QuestionnaireTemplatesServicePaginationReq.md#tojson)
- [toJson](QuestionnaireTemplatesServicePaginationReq.md#tojson-1)
- [toJsonString](QuestionnaireTemplatesServicePaginationReq.md#tojsonstring)
- [equals](QuestionnaireTemplatesServicePaginationReq.md#equals-1)
- [fromBinary](QuestionnaireTemplatesServicePaginationReq.md#frombinary-1)
- [fromJson](QuestionnaireTemplatesServicePaginationReq.md#fromjson-1)
- [fromJsonString](QuestionnaireTemplatesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireTemplatesServicePaginationReq**(`data?`): [`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)\> |

#### Returns

[`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)

#### Overrides

Message\&lt;QuestionnaireTemplatesServicePaginationReq\&gt;.constructor

#### Defined in

src/questionnaire_templates.scailo_pb.ts:764

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

src/questionnaire_templates.scailo_pb.ts:712

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

src/questionnaire_templates.scailo_pb.ts:696

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

src/questionnaire_templates.scailo_pb.ts:728

___

### sortKey

• `Optional` **sortKey**: [`QUESTIONNAIRE_TEMPLATE_SORT_KEY`](../enums/QUESTIONNAIRE_TEMPLATE_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.QUESTIONNAIRE_TEMPLATE_SORT_KEY sort_key = 5;

#### Defined in

src/questionnaire_templates.scailo_pb.ts:750

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

src/questionnaire_templates.scailo_pb.ts:740

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

src/questionnaire_templates.scailo_pb.ts:762

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/questionnaire_templates.scailo_pb.ts:771

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/questionnaire_templates.scailo_pb.ts:769

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireTemplatesServicePaginationReq"``

#### Defined in

src/questionnaire_templates.scailo_pb.ts:770

## Methods

### clone

▸ **clone**(): [`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/questionnaire_templates.scailo_pb.ts:792

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)

#### Defined in

src/questionnaire_templates.scailo_pb.ts:780

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)

#### Defined in

src/questionnaire_templates.scailo_pb.ts:784

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServicePaginationReq`](QuestionnaireTemplatesServicePaginationReq.md)

#### Defined in

src/questionnaire_templates.scailo_pb.ts:788
