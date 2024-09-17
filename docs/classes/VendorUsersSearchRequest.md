[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorUsersSearchRequest

# Class: VendorUsersSearchRequest

Describes the request payload to search vendor users

**`Generated`**

from message Scailo.VendorUsersSearchRequest

## Hierarchy

- `Message`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\>

  ↳ **`VendorUsersSearchRequest`**

## Table of contents

### Constructors

- [constructor](VendorUsersSearchRequest.md#constructor)

### Properties

- [associateId](VendorUsersSearchRequest.md#associateid)
- [count](VendorUsersSearchRequest.md#count)
- [entityUuid](VendorUsersSearchRequest.md#entityuuid)
- [isActive](VendorUsersSearchRequest.md#isactive)
- [offset](VendorUsersSearchRequest.md#offset)
- [searchKey](VendorUsersSearchRequest.md#searchkey)
- [status](VendorUsersSearchRequest.md#status)
- [userId](VendorUsersSearchRequest.md#userid)
- [vendorId](VendorUsersSearchRequest.md#vendorid)
- [fields](VendorUsersSearchRequest.md#fields)
- [runtime](VendorUsersSearchRequest.md#runtime)
- [typeName](VendorUsersSearchRequest.md#typename)

### Methods

- [clone](VendorUsersSearchRequest.md#clone)
- [equals](VendorUsersSearchRequest.md#equals)
- [fromBinary](VendorUsersSearchRequest.md#frombinary)
- [fromJson](VendorUsersSearchRequest.md#fromjson)
- [fromJsonString](VendorUsersSearchRequest.md#fromjsonstring)
- [getType](VendorUsersSearchRequest.md#gettype)
- [toBinary](VendorUsersSearchRequest.md#tobinary)
- [toJSON](VendorUsersSearchRequest.md#tojson)
- [toJson](VendorUsersSearchRequest.md#tojson-1)
- [toJsonString](VendorUsersSearchRequest.md#tojsonstring)
- [equals](VendorUsersSearchRequest.md#equals-1)
- [fromBinary](VendorUsersSearchRequest.md#frombinary-1)
- [fromJson](VendorUsersSearchRequest.md#fromjson-1)
- [fromJsonString](VendorUsersSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorUsersSearchRequest**(`data?`): [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\> |

#### Returns

[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Overrides

Message\&lt;VendorUsersSearchRequest\&gt;.constructor

#### Defined in

src/vendors.scailo_pb.ts:2211

## Properties

### associateId

• **associateId**: `bigint` = `protoInt64.zero`

Stores an optional associate ID

**`Generated`**

from field: uint64 associate_id = 12;

#### Defined in

src/vendors.scailo_pb.ts:2202

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/vendors.scailo_pb.ts:2160

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/vendors.scailo_pb.ts:2174

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/vendors.scailo_pb.ts:2153

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/vendors.scailo_pb.ts:2167

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 20;

#### Defined in

src/vendors.scailo_pb.ts:2209

___

### status

• **status**: [`VENDOR_USER_STATUS`](../enums/VENDOR_USER_STATUS.md) = `VENDOR_USER_STATUS.VENDOR_USER_STATUS_ANY_UNSPECIFIED`

The status of the users

**`Generated`**

from field: Scailo.VENDOR_USER_STATUS status = 7;

#### Defined in

src/vendors.scailo_pb.ts:2181

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

Stores the user ID

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/vendors.scailo_pb.ts:2195

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

Stores the vendor ID

**`Generated`**

from field: uint64 vendor_id = 10;

#### Defined in

src/vendors.scailo_pb.ts:2188

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendors.scailo_pb.ts:2218

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendors.scailo_pb.ts:2216

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorUsersSearchRequest"``

#### Defined in

src/vendors.scailo_pb.ts:2217

## Methods

### clone

▸ **clone**(): [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

Create a deep copy.

#### Returns

[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md) \| `PlainMessage`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\>

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
| `a` | `undefined` \| [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md) \| `PlainMessage`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\> |
| `b` | `undefined` \| [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md) \| `PlainMessage`\<[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendors.scailo_pb.ts:2242

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Defined in

src/vendors.scailo_pb.ts:2230

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Defined in

src/vendors.scailo_pb.ts:2234

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorUsersSearchRequest`](VendorUsersSearchRequest.md)

#### Defined in

src/vendors.scailo_pb.ts:2238
