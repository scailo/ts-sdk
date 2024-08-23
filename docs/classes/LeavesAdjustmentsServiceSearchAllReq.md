[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesAdjustmentsServiceSearchAllReq

# Class: LeavesAdjustmentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.LeavesAdjustmentsServiceSearchAllReq

## Hierarchy

- `Message`\<[`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)\>

  ↳ **`LeavesAdjustmentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](LeavesAdjustmentsServiceSearchAllReq.md#constructor)

### Properties

- [count](LeavesAdjustmentsServiceSearchAllReq.md#count)
- [entityUuid](LeavesAdjustmentsServiceSearchAllReq.md#entityuuid)
- [isActive](LeavesAdjustmentsServiceSearchAllReq.md#isactive)
- [offset](LeavesAdjustmentsServiceSearchAllReq.md#offset)
- [searchKey](LeavesAdjustmentsServiceSearchAllReq.md#searchkey)
- [sortKey](LeavesAdjustmentsServiceSearchAllReq.md#sortkey)
- [sortOrder](LeavesAdjustmentsServiceSearchAllReq.md#sortorder)
- [status](LeavesAdjustmentsServiceSearchAllReq.md#status)
- [fields](LeavesAdjustmentsServiceSearchAllReq.md#fields)
- [runtime](LeavesAdjustmentsServiceSearchAllReq.md#runtime)
- [typeName](LeavesAdjustmentsServiceSearchAllReq.md#typename)

### Methods

- [clone](LeavesAdjustmentsServiceSearchAllReq.md#clone)
- [equals](LeavesAdjustmentsServiceSearchAllReq.md#equals)
- [fromBinary](LeavesAdjustmentsServiceSearchAllReq.md#frombinary)
- [fromJson](LeavesAdjustmentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](LeavesAdjustmentsServiceSearchAllReq.md#fromjsonstring)
- [getType](LeavesAdjustmentsServiceSearchAllReq.md#gettype)
- [toBinary](LeavesAdjustmentsServiceSearchAllReq.md#tobinary)
- [toJSON](LeavesAdjustmentsServiceSearchAllReq.md#tojson)
- [toJson](LeavesAdjustmentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](LeavesAdjustmentsServiceSearchAllReq.md#tojsonstring)
- [equals](LeavesAdjustmentsServiceSearchAllReq.md#equals-1)
- [fromBinary](LeavesAdjustmentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](LeavesAdjustmentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](LeavesAdjustmentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesAdjustmentsServiceSearchAllReq**(`data?`): [`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)\> |

#### Returns

[`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)

#### Overrides

Message\&lt;LeavesAdjustmentsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1482

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1438

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1466

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1431

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1445

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1480

___

### sortKey

• **sortKey**: [`LEAVE_ADJUSTMENT_SORT_KEY`](../enums/LEAVE_ADJUSTMENT_SORT_KEY.md) = `LEAVE_ADJUSTMENT_SORT_KEY.LEAVE_ADJUSTMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.LEAVE_ADJUSTMENT_SORT_KEY sort_key = 5;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1459

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1452

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1473

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1489

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1487

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesAdjustmentsServiceSearchAllReq"``

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1488

## Methods

### clone

▸ **clone**(): [`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md) \| `PlainMessage`\<[`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1512

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1500

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1504

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesAdjustmentsServiceSearchAllReq`](LeavesAdjustmentsServiceSearchAllReq.md)

#### Defined in

src/leaves_adjustments.scailo_pb.ts:1508
