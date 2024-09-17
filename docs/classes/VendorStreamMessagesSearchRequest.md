[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamMessagesSearchRequest

# Class: VendorStreamMessagesSearchRequest

Describes the request payload to retrieve messages.

**`Generated`**

from message Scailo.VendorStreamMessagesSearchRequest

## Hierarchy

- `Message`\<[`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)\>

  ↳ **`VendorStreamMessagesSearchRequest`**

## Table of contents

### Constructors

- [constructor](VendorStreamMessagesSearchRequest.md#constructor)

### Properties

- [count](VendorStreamMessagesSearchRequest.md#count)
- [entityUuid](VendorStreamMessagesSearchRequest.md#entityuuid)
- [isActive](VendorStreamMessagesSearchRequest.md#isactive)
- [messageType](VendorStreamMessagesSearchRequest.md#messagetype)
- [offset](VendorStreamMessagesSearchRequest.md#offset)
- [responseToMessageUuid](VendorStreamMessagesSearchRequest.md#responsetomessageuuid)
- [searchKey](VendorStreamMessagesSearchRequest.md#searchkey)
- [sortKey](VendorStreamMessagesSearchRequest.md#sortkey)
- [sortOrder](VendorStreamMessagesSearchRequest.md#sortorder)
- [vendorStreamId](VendorStreamMessagesSearchRequest.md#vendorstreamid)
- [fields](VendorStreamMessagesSearchRequest.md#fields)
- [runtime](VendorStreamMessagesSearchRequest.md#runtime)
- [typeName](VendorStreamMessagesSearchRequest.md#typename)

### Methods

- [clone](VendorStreamMessagesSearchRequest.md#clone)
- [equals](VendorStreamMessagesSearchRequest.md#equals)
- [fromBinary](VendorStreamMessagesSearchRequest.md#frombinary)
- [fromJson](VendorStreamMessagesSearchRequest.md#fromjson)
- [fromJsonString](VendorStreamMessagesSearchRequest.md#fromjsonstring)
- [getType](VendorStreamMessagesSearchRequest.md#gettype)
- [toBinary](VendorStreamMessagesSearchRequest.md#tobinary)
- [toJSON](VendorStreamMessagesSearchRequest.md#tojson)
- [toJson](VendorStreamMessagesSearchRequest.md#tojson-1)
- [toJsonString](VendorStreamMessagesSearchRequest.md#tojsonstring)
- [equals](VendorStreamMessagesSearchRequest.md#equals-1)
- [fromBinary](VendorStreamMessagesSearchRequest.md#frombinary-1)
- [fromJson](VendorStreamMessagesSearchRequest.md#fromjson-1)
- [fromJsonString](VendorStreamMessagesSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamMessagesSearchRequest**(`data?`): [`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)\> |

#### Returns

[`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)

#### Overrides

Message\&lt;VendorStreamMessagesSearchRequest\&gt;.constructor

#### Defined in

src/vendorstreams.scailo_pb.ts:1657

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/vendorstreams.scailo_pb.ts:1599

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/vendorstreams.scailo_pb.ts:1627

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/vendorstreams.scailo_pb.ts:1592

___

### messageType

• **messageType**: [`VENDOR_STREAM_MESSAGE_TYPE`](../enums/VENDOR_STREAM_MESSAGE_TYPE.md) = `VENDOR_STREAM_MESSAGE_TYPE.VENDOR_STREAM_MESSAGE_TYPE_ANY_UNSPECIFIED`

The type of the message

**`Generated`**

from field: Scailo.VENDOR_STREAM_MESSAGE_TYPE message_type = 8;

#### Defined in

src/vendorstreams.scailo_pb.ts:1634

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/vendorstreams.scailo_pb.ts:1606

___

### responseToMessageUuid

• **responseToMessageUuid**: `string` = `""`

Stores the optional UUID of the message that this message is a response to

**`Generated`**

from field: string response_to_message_uuid = 30;

#### Defined in

src/vendorstreams.scailo_pb.ts:1648

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/vendorstreams.scailo_pb.ts:1655

___

### sortKey

• **sortKey**: [`VENDOR_STREAM_MESSAGE_SORT_KEY`](../enums/VENDOR_STREAM_MESSAGE_SORT_KEY.md) = `VENDOR_STREAM_MESSAGE_SORT_KEY.VENDOR_STREAM_MESSAGE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.VENDOR_STREAM_MESSAGE_SORT_KEY sort_key = 5;

#### Defined in

src/vendorstreams.scailo_pb.ts:1620

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/vendorstreams.scailo_pb.ts:1613

___

### vendorStreamId

• **vendorStreamId**: `bigint` = `protoInt64.zero`

The ID of the vendor stream

**`Generated`**

from field: uint64 vendor_stream_id = 20;

#### Defined in

src/vendorstreams.scailo_pb.ts:1641

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendorstreams.scailo_pb.ts:1664

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendorstreams.scailo_pb.ts:1662

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamMessagesSearchRequest"``

#### Defined in

src/vendorstreams.scailo_pb.ts:1663

## Methods

### clone

▸ **clone**(): [`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)

Create a deep copy.

#### Returns

[`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md) \| `PlainMessage`\<[`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)\>

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
| `a` | `undefined` \| [`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md) \| `PlainMessage`\<[`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)\> |
| `b` | `undefined` \| [`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md) \| `PlainMessage`\<[`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendorstreams.scailo_pb.ts:1689

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1677

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1681

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamMessagesSearchRequest`](VendorStreamMessagesSearchRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:1685
