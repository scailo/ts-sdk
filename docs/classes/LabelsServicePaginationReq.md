[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LabelsServicePaginationReq

# Class: LabelsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.LabelsServicePaginationReq

## Hierarchy

- `Message`\<[`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)\>

  ↳ **`LabelsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](LabelsServicePaginationReq.md#constructor)

### Properties

- [count](LabelsServicePaginationReq.md#count)
- [isActive](LabelsServicePaginationReq.md#isactive)
- [offset](LabelsServicePaginationReq.md#offset)
- [sortKey](LabelsServicePaginationReq.md#sortkey)
- [sortOrder](LabelsServicePaginationReq.md#sortorder)
- [fields](LabelsServicePaginationReq.md#fields)
- [runtime](LabelsServicePaginationReq.md#runtime)
- [typeName](LabelsServicePaginationReq.md#typename)

### Methods

- [clone](LabelsServicePaginationReq.md#clone)
- [equals](LabelsServicePaginationReq.md#equals)
- [fromBinary](LabelsServicePaginationReq.md#frombinary)
- [fromJson](LabelsServicePaginationReq.md#fromjson)
- [fromJsonString](LabelsServicePaginationReq.md#fromjsonstring)
- [getType](LabelsServicePaginationReq.md#gettype)
- [toBinary](LabelsServicePaginationReq.md#tobinary)
- [toJSON](LabelsServicePaginationReq.md#tojson)
- [toJson](LabelsServicePaginationReq.md#tojson-1)
- [toJsonString](LabelsServicePaginationReq.md#tojsonstring)
- [equals](LabelsServicePaginationReq.md#equals-1)
- [fromBinary](LabelsServicePaginationReq.md#frombinary-1)
- [fromJson](LabelsServicePaginationReq.md#fromjson-1)
- [fromJsonString](LabelsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LabelsServicePaginationReq**(`data?`): [`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)\> |

#### Returns

[`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)

#### Overrides

Message\&lt;LabelsServicePaginationReq\&gt;.constructor

#### Defined in

src/labels.scailo_pb.ts:433

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/labels.scailo_pb.ts:410

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/labels.scailo_pb.ts:403

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/labels.scailo_pb.ts:417

___

### sortKey

• **sortKey**: [`LABEL_SORT_KEY`](../enums/LABEL_SORT_KEY.md) = `LABEL_SORT_KEY.LABEL_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.LABEL_SORT_KEY sort_key = 5;

#### Defined in

src/labels.scailo_pb.ts:431

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/labels.scailo_pb.ts:424

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/labels.scailo_pb.ts:440

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/labels.scailo_pb.ts:438

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LabelsServicePaginationReq"``

#### Defined in

src/labels.scailo_pb.ts:439

## Methods

### clone

▸ **clone**(): [`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LabelsServicePaginationReq`](LabelsServicePaginationReq.md) \| `PlainMessage`\<[`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`LabelsServicePaginationReq`](LabelsServicePaginationReq.md) \| `PlainMessage`\<[`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`LabelsServicePaginationReq`](LabelsServicePaginationReq.md) \| `PlainMessage`\<[`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/labels.scailo_pb.ts:460

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)

#### Defined in

src/labels.scailo_pb.ts:448

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)

#### Defined in

src/labels.scailo_pb.ts:452

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LabelsServicePaginationReq`](LabelsServicePaginationReq.md)

#### Defined in

src/labels.scailo_pb.ts:456
