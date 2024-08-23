[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceFilterReq

# Class: LocationsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.LocationsServiceFilterReq

## Hierarchy

- `Message`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\>

  ↳ **`LocationsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](LocationsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](LocationsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](LocationsServiceFilterReq.md#approvedonend)
- [approvedOnStart](LocationsServiceFilterReq.md#approvedonstart)
- [approverRoleId](LocationsServiceFilterReq.md#approverroleid)
- [code](LocationsServiceFilterReq.md#code)
- [count](LocationsServiceFilterReq.md#count)
- [creationTimestampEnd](LocationsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](LocationsServiceFilterReq.md#creationtimestampstart)
- [email](LocationsServiceFilterReq.md#email)
- [entityUuid](LocationsServiceFilterReq.md#entityuuid)
- [isActive](LocationsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](LocationsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](LocationsServiceFilterReq.md#modificationtimestampstart)
- [name](LocationsServiceFilterReq.md#name)
- [offset](LocationsServiceFilterReq.md#offset)
- [phone](LocationsServiceFilterReq.md#phone)
- [sortKey](LocationsServiceFilterReq.md#sortkey)
- [sortOrder](LocationsServiceFilterReq.md#sortorder)
- [status](LocationsServiceFilterReq.md#status)
- [fields](LocationsServiceFilterReq.md#fields)
- [runtime](LocationsServiceFilterReq.md#runtime)
- [typeName](LocationsServiceFilterReq.md#typename)

### Methods

- [clone](LocationsServiceFilterReq.md#clone)
- [equals](LocationsServiceFilterReq.md#equals)
- [fromBinary](LocationsServiceFilterReq.md#frombinary)
- [fromJson](LocationsServiceFilterReq.md#fromjson)
- [fromJsonString](LocationsServiceFilterReq.md#fromjsonstring)
- [getType](LocationsServiceFilterReq.md#gettype)
- [toBinary](LocationsServiceFilterReq.md#tobinary)
- [toJSON](LocationsServiceFilterReq.md#tojson)
- [toJson](LocationsServiceFilterReq.md#tojson-1)
- [toJsonString](LocationsServiceFilterReq.md#tojsonstring)
- [equals](LocationsServiceFilterReq.md#equals-1)
- [fromBinary](LocationsServiceFilterReq.md#frombinary-1)
- [fromJson](LocationsServiceFilterReq.md#fromjson-1)
- [fromJsonString](LocationsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServiceFilterReq**(`data?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\> |

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Overrides

Message\&lt;LocationsServiceFilterReq\&gt;.constructor

#### Defined in

src/locations.scailo_pb.ts:734

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/locations.scailo_pb.ts:697

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/locations.scailo_pb.ts:690

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/locations.scailo_pb.ts:683

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/locations.scailo_pb.ts:704

___

### code

• **code**: `string` = `""`

The unique code by which the location is classified

**`Generated`**

from field: string code = 21;

#### Defined in

src/locations.scailo_pb.ts:718

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/locations.scailo_pb.ts:613

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/locations.scailo_pb.ts:648

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/locations.scailo_pb.ts:641

___

### email

• **email**: `string` = `""`

The primary email of the location

**`Generated`**

from field: string email = 22;

#### Defined in

src/locations.scailo_pb.ts:725

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/locations.scailo_pb.ts:669

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/locations.scailo_pb.ts:606

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/locations.scailo_pb.ts:662

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/locations.scailo_pb.ts:655

___

### name

• **name**: `string` = `""`

The name of the location

**`Generated`**

from field: string name = 20;

#### Defined in

src/locations.scailo_pb.ts:711

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/locations.scailo_pb.ts:620

___

### phone

• **phone**: `string` = `""`

The primary contact number of the location

**`Generated`**

from field: string phone = 23;

#### Defined in

src/locations.scailo_pb.ts:732

___

### sortKey

• **sortKey**: [`LOCATION_SORT_KEY`](../enums/LOCATION_SORT_KEY.md) = `LOCATION_SORT_KEY.LOCATION_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.LOCATION_SORT_KEY sort_key = 5;

#### Defined in

src/locations.scailo_pb.ts:634

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/locations.scailo_pb.ts:627

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this location

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/locations.scailo_pb.ts:676

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/locations.scailo_pb.ts:741

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/locations.scailo_pb.ts:739

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsServiceFilterReq"``

#### Defined in

src/locations.scailo_pb.ts:740

## Methods

### clone

▸ **clone**(): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md) \| `PlainMessage`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md) \| `PlainMessage`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md) \| `PlainMessage`\<[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/locations.scailo_pb.ts:775

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Defined in

src/locations.scailo_pb.ts:763

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Defined in

src/locations.scailo_pb.ts:767

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceFilterReq`](LocationsServiceFilterReq.md)

#### Defined in

src/locations.scailo_pb.ts:771
