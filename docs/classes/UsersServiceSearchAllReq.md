[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / UsersServiceSearchAllReq

# Class: UsersServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.UsersServiceSearchAllReq

## Hierarchy

- `Message`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\>

  ↳ **`UsersServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](UsersServiceSearchAllReq.md#constructor)

### Properties

- [clientId](UsersServiceSearchAllReq.md#clientid)
- [count](UsersServiceSearchAllReq.md#count)
- [entityUuid](UsersServiceSearchAllReq.md#entityuuid)
- [isActive](UsersServiceSearchAllReq.md#isactive)
- [offset](UsersServiceSearchAllReq.md#offset)
- [searchKey](UsersServiceSearchAllReq.md#searchkey)
- [sortKey](UsersServiceSearchAllReq.md#sortkey)
- [sortOrder](UsersServiceSearchAllReq.md#sortorder)
- [status](UsersServiceSearchAllReq.md#status)
- [userType](UsersServiceSearchAllReq.md#usertype)
- [vendorId](UsersServiceSearchAllReq.md#vendorid)
- [fields](UsersServiceSearchAllReq.md#fields)
- [runtime](UsersServiceSearchAllReq.md#runtime)
- [typeName](UsersServiceSearchAllReq.md#typename)

### Methods

- [clone](UsersServiceSearchAllReq.md#clone)
- [equals](UsersServiceSearchAllReq.md#equals)
- [fromBinary](UsersServiceSearchAllReq.md#frombinary)
- [fromJson](UsersServiceSearchAllReq.md#fromjson)
- [fromJsonString](UsersServiceSearchAllReq.md#fromjsonstring)
- [getType](UsersServiceSearchAllReq.md#gettype)
- [toBinary](UsersServiceSearchAllReq.md#tobinary)
- [toJSON](UsersServiceSearchAllReq.md#tojson)
- [toJson](UsersServiceSearchAllReq.md#tojson-1)
- [toJsonString](UsersServiceSearchAllReq.md#tojsonstring)
- [equals](UsersServiceSearchAllReq.md#equals-1)
- [fromBinary](UsersServiceSearchAllReq.md#frombinary-1)
- [fromJson](UsersServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](UsersServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UsersServiceSearchAllReq**(`data?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\> |

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Overrides

Message\&lt;UsersServiceSearchAllReq\&gt;.constructor

#### Defined in

src/users.scailo_pb.ts:1920

## Properties

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

Filter by the associated client ID (return all the users that belong to this client)

--------------------------------------------------------------------------------

**`Generated`**

from field: uint64 client_id = 71;

#### Defined in

src/users.scailo_pb.ts:1918

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/users.scailo_pb.ts:1852

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/users.scailo_pb.ts:1880

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/users.scailo_pb.ts:1845

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/users.scailo_pb.ts:1859

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/users.scailo_pb.ts:1901

___

### sortKey

• **sortKey**: [`USER_SORT_KEY`](../enums/USER_SORT_KEY.md) = `USER_SORT_KEY.USER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.USER_SORT_KEY sort_key = 5;

#### Defined in

src/users.scailo_pb.ts:1873

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/users.scailo_pb.ts:1866

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/users.scailo_pb.ts:1894

___

### userType

• **userType**: [`USER_TYPE`](../enums/USER_TYPE.md) = `USER_TYPE.USER_TYPE_ANY_UNSPECIFIED`

Stores the user type

**`Generated`**

from field: Scailo.USER_TYPE user_type = 7;

#### Defined in

src/users.scailo_pb.ts:1887

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

--------------------------------------------------------------------------------
Filter by the associated vendor ID (return all the users that belong to this vendor)

**`Generated`**

from field: uint64 vendor_id = 70;

#### Defined in

src/users.scailo_pb.ts:1909

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/users.scailo_pb.ts:1927

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/users.scailo_pb.ts:1925

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UsersServiceSearchAllReq"``

#### Defined in

src/users.scailo_pb.ts:1926

## Methods

### clone

▸ **clone**(): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md) \| `PlainMessage`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md) \| `PlainMessage`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md) \| `PlainMessage`\<[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/users.scailo_pb.ts:1953

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Defined in

src/users.scailo_pb.ts:1941

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Defined in

src/users.scailo_pb.ts:1945

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UsersServiceSearchAllReq`](UsersServiceSearchAllReq.md)

#### Defined in

src/users.scailo_pb.ts:1949
