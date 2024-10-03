[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServiceSearchAllReq

# Class: VendorStreamsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.VendorStreamsServiceSearchAllReq

## Hierarchy

- `Message`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\>

  ↳ **`VendorStreamsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServiceSearchAllReq.md#constructor)

### Properties

- [count](VendorStreamsServiceSearchAllReq.md#count)
- [entityUuid](VendorStreamsServiceSearchAllReq.md#entityuuid)
- [internalSubscriberUserId](VendorStreamsServiceSearchAllReq.md#internalsubscriberuserid)
- [isActive](VendorStreamsServiceSearchAllReq.md#isactive)
- [offset](VendorStreamsServiceSearchAllReq.md#offset)
- [searchKey](VendorStreamsServiceSearchAllReq.md#searchkey)
- [sortKey](VendorStreamsServiceSearchAllReq.md#sortkey)
- [sortOrder](VendorStreamsServiceSearchAllReq.md#sortorder)
- [status](VendorStreamsServiceSearchAllReq.md#status)
- [vendorId](VendorStreamsServiceSearchAllReq.md#vendorid)
- [vendorSubscriberUserId](VendorStreamsServiceSearchAllReq.md#vendorsubscriberuserid)
- [fields](VendorStreamsServiceSearchAllReq.md#fields)
- [runtime](VendorStreamsServiceSearchAllReq.md#runtime)
- [typeName](VendorStreamsServiceSearchAllReq.md#typename)

### Methods

- [clone](VendorStreamsServiceSearchAllReq.md#clone)
- [equals](VendorStreamsServiceSearchAllReq.md#equals)
- [fromBinary](VendorStreamsServiceSearchAllReq.md#frombinary)
- [fromJson](VendorStreamsServiceSearchAllReq.md#fromjson)
- [fromJsonString](VendorStreamsServiceSearchAllReq.md#fromjsonstring)
- [getType](VendorStreamsServiceSearchAllReq.md#gettype)
- [toBinary](VendorStreamsServiceSearchAllReq.md#tobinary)
- [toJSON](VendorStreamsServiceSearchAllReq.md#tojson)
- [toJson](VendorStreamsServiceSearchAllReq.md#tojson-1)
- [toJsonString](VendorStreamsServiceSearchAllReq.md#tojsonstring)
- [equals](VendorStreamsServiceSearchAllReq.md#equals-1)
- [fromBinary](VendorStreamsServiceSearchAllReq.md#frombinary-1)
- [fromJson](VendorStreamsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](VendorStreamsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServiceSearchAllReq**(`data?`): [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\> |

#### Returns

[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Overrides

Message\&lt;VendorStreamsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/vendor_streams.scailo_pb.ts:1336

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/vendor_streams.scailo_pb.ts:1268

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/vendor_streams.scailo_pb.ts:1296

___

### internalSubscriberUserId

• **internalSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated internal subscriber user ID

**`Generated`**

from field: uint64 internal_subscriber_user_id = 60;

#### Defined in

src/vendor_streams.scailo_pb.ts:1327

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/vendor_streams.scailo_pb.ts:1261

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/vendor_streams.scailo_pb.ts:1275

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/vendor_streams.scailo_pb.ts:1310

___

### sortKey

• **sortKey**: [`VENDOR_STREAM_SORT_KEY`](../enums/VENDOR_STREAM_SORT_KEY.md) = `VENDOR_STREAM_SORT_KEY.VENDOR_STREAM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.VENDOR_STREAM_SORT_KEY sort_key = 5;

#### Defined in

src/vendor_streams.scailo_pb.ts:1289

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/vendor_streams.scailo_pb.ts:1282

___

### status

• **status**: [`VENDOR_STREAM_LIFECYCLE`](../enums/VENDOR_STREAM_LIFECYCLE.md) = `VENDOR_STREAM_LIFECYCLE.VENDOR_STREAM_LIFECYCLE_ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.VENDOR_STREAM_LIFECYCLE status = 10;

#### Defined in

src/vendor_streams.scailo_pb.ts:1303

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

------------------------------------------------
Filter by the associated vendor ID

------------------------------------------------

**`Generated`**

from field: uint64 vendor_id = 40;

#### Defined in

src/vendor_streams.scailo_pb.ts:1320

___

### vendorSubscriberUserId

• **vendorSubscriberUserId**: `bigint` = `protoInt64.zero`

Filter by the associated vendor subscriber user ID

**`Generated`**

from field: uint64 vendor_subscriber_user_id = 61;

#### Defined in

src/vendor_streams.scailo_pb.ts:1334

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendor_streams.scailo_pb.ts:1343

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendor_streams.scailo_pb.ts:1341

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServiceSearchAllReq"``

#### Defined in

src/vendor_streams.scailo_pb.ts:1342

## Methods

### clone

▸ **clone**(): [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md) \| `PlainMessage`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md) \| `PlainMessage`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md) \| `PlainMessage`\<[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendor_streams.scailo_pb.ts:1369

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Defined in

src/vendor_streams.scailo_pb.ts:1357

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Defined in

src/vendor_streams.scailo_pb.ts:1361

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceSearchAllReq`](VendorStreamsServiceSearchAllReq.md)

#### Defined in

src/vendor_streams.scailo_pb.ts:1365
