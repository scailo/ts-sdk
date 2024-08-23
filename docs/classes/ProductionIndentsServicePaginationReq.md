[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServicePaginationReq

# Class: ProductionIndentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.ProductionIndentsServicePaginationReq

## Hierarchy

- `Message`\<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\>

  ↳ **`ProductionIndentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServicePaginationReq.md#constructor)

### Properties

- [count](ProductionIndentsServicePaginationReq.md#count)
- [isActive](ProductionIndentsServicePaginationReq.md#isactive)
- [offset](ProductionIndentsServicePaginationReq.md#offset)
- [sortKey](ProductionIndentsServicePaginationReq.md#sortkey)
- [sortOrder](ProductionIndentsServicePaginationReq.md#sortorder)
- [status](ProductionIndentsServicePaginationReq.md#status)
- [fields](ProductionIndentsServicePaginationReq.md#fields)
- [runtime](ProductionIndentsServicePaginationReq.md#runtime)
- [typeName](ProductionIndentsServicePaginationReq.md#typename)

### Methods

- [clone](ProductionIndentsServicePaginationReq.md#clone)
- [equals](ProductionIndentsServicePaginationReq.md#equals)
- [fromBinary](ProductionIndentsServicePaginationReq.md#frombinary)
- [fromJson](ProductionIndentsServicePaginationReq.md#fromjson)
- [fromJsonString](ProductionIndentsServicePaginationReq.md#fromjsonstring)
- [getType](ProductionIndentsServicePaginationReq.md#gettype)
- [toBinary](ProductionIndentsServicePaginationReq.md#tobinary)
- [toJSON](ProductionIndentsServicePaginationReq.md#tojson)
- [toJson](ProductionIndentsServicePaginationReq.md#tojson-1)
- [toJsonString](ProductionIndentsServicePaginationReq.md#tojsonstring)
- [equals](ProductionIndentsServicePaginationReq.md#equals-1)
- [fromBinary](ProductionIndentsServicePaginationReq.md#frombinary-1)
- [fromJson](ProductionIndentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ProductionIndentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServicePaginationReq**(`data?`): [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\> |

#### Returns

[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Overrides

Message\&lt;ProductionIndentsServicePaginationReq\&gt;.constructor

#### Defined in

src/production_indents.scailo_pb.ts:1107

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/production_indents.scailo_pb.ts:1077

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/production_indents.scailo_pb.ts:1070

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/production_indents.scailo_pb.ts:1084

___

### sortKey

• **sortKey**: [`PRODUCTION_INDENT_SORT_KEY`](../enums/PRODUCTION_INDENT_SORT_KEY.md) = `PRODUCTION_INDENT_SORT_KEY.PRODUCTION_INDENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PRODUCTION_INDENT_SORT_KEY sort_key = 5;

#### Defined in

src/production_indents.scailo_pb.ts:1098

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/production_indents.scailo_pb.ts:1091

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this production indent

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

src/production_indents.scailo_pb.ts:1105

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_indents.scailo_pb.ts:1114

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_indents.scailo_pb.ts:1112

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentsServicePaginationReq"``

#### Defined in

src/production_indents.scailo_pb.ts:1113

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md) \| `PlainMessage`\<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md) \| `PlainMessage`\<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md) \| `PlainMessage`\<[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_indents.scailo_pb.ts:1135

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Defined in

src/production_indents.scailo_pb.ts:1123

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Defined in

src/production_indents.scailo_pb.ts:1127

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServicePaginationReq`](ProductionIndentsServicePaginationReq.md)

#### Defined in

src/production_indents.scailo_pb.ts:1131
