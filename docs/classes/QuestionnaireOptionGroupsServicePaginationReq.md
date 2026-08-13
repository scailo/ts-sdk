[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireOptionGroupsServicePaginationReq

# Class: QuestionnaireOptionGroupsServicePaginationReq

Pagination request for retrieving slices of Questionnaire Option Group records.

**`Generated`**

from message Scailo.QuestionnaireOptionGroupsServicePaginationReq

## Hierarchy

- `Message`\<[`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)\>

  ↳ **`QuestionnaireOptionGroupsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](QuestionnaireOptionGroupsServicePaginationReq.md#constructor)

### Properties

- [count](QuestionnaireOptionGroupsServicePaginationReq.md#count)
- [isActive](QuestionnaireOptionGroupsServicePaginationReq.md#isactive)
- [offset](QuestionnaireOptionGroupsServicePaginationReq.md#offset)
- [sortKey](QuestionnaireOptionGroupsServicePaginationReq.md#sortkey)
- [sortOrder](QuestionnaireOptionGroupsServicePaginationReq.md#sortorder)
- [status](QuestionnaireOptionGroupsServicePaginationReq.md#status)
- [fields](QuestionnaireOptionGroupsServicePaginationReq.md#fields)
- [runtime](QuestionnaireOptionGroupsServicePaginationReq.md#runtime)
- [typeName](QuestionnaireOptionGroupsServicePaginationReq.md#typename)

### Methods

- [clone](QuestionnaireOptionGroupsServicePaginationReq.md#clone)
- [equals](QuestionnaireOptionGroupsServicePaginationReq.md#equals)
- [fromBinary](QuestionnaireOptionGroupsServicePaginationReq.md#frombinary)
- [fromJson](QuestionnaireOptionGroupsServicePaginationReq.md#fromjson)
- [fromJsonString](QuestionnaireOptionGroupsServicePaginationReq.md#fromjsonstring)
- [getType](QuestionnaireOptionGroupsServicePaginationReq.md#gettype)
- [toBinary](QuestionnaireOptionGroupsServicePaginationReq.md#tobinary)
- [toJSON](QuestionnaireOptionGroupsServicePaginationReq.md#tojson)
- [toJson](QuestionnaireOptionGroupsServicePaginationReq.md#tojson-1)
- [toJsonString](QuestionnaireOptionGroupsServicePaginationReq.md#tojsonstring)
- [equals](QuestionnaireOptionGroupsServicePaginationReq.md#equals-1)
- [fromBinary](QuestionnaireOptionGroupsServicePaginationReq.md#frombinary-1)
- [fromJson](QuestionnaireOptionGroupsServicePaginationReq.md#fromjson-1)
- [fromJsonString](QuestionnaireOptionGroupsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireOptionGroupsServicePaginationReq**(`data?`): [`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)\> |

#### Returns

[`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)

#### Overrides

Message\&lt;QuestionnaireOptionGroupsServicePaginationReq\&gt;.constructor

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1564

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

src/questionnaire_option_groups.scailo_pb.ts:1512

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

src/questionnaire_option_groups.scailo_pb.ts:1496

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

src/questionnaire_option_groups.scailo_pb.ts:1528

___

### sortKey

• `Optional` **sortKey**: [`QUESTIONNAIRE_OPTION_GROUP_SORT_KEY`](../enums/QUESTIONNAIRE_OPTION_GROUP_SORT_KEY.md)

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: optional Scailo.QUESTIONNAIRE_OPTION_GROUP_SORT_KEY sort_key = 5;

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1550

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

src/questionnaire_option_groups.scailo_pb.ts:1540

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

src/questionnaire_option_groups.scailo_pb.ts:1562

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1571

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1569

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireOptionGroupsServicePaginationReq"``

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1570

## Methods

### clone

▸ **clone**(): [`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md) \| `PlainMessage`\<[`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1592

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1580

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1584

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireOptionGroupsServicePaginationReq`](QuestionnaireOptionGroupsServicePaginationReq.md)

#### Defined in

src/questionnaire_option_groups.scailo_pb.ts:1588
