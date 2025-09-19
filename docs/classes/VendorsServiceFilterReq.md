[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsServiceFilterReq

# Class: VendorsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.VendorsServiceFilterReq

## Hierarchy

- `Message`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\>

  ↳ **`VendorsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](VendorsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](VendorsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](VendorsServiceFilterReq.md#approvedonend)
- [approvedOnStart](VendorsServiceFilterReq.md#approvedonstart)
- [approverRoleId](VendorsServiceFilterReq.md#approverroleid)
- [code](VendorsServiceFilterReq.md#code)
- [count](VendorsServiceFilterReq.md#count)
- [creationTimestampEnd](VendorsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](VendorsServiceFilterReq.md#creationtimestampstart)
- [email](VendorsServiceFilterReq.md#email)
- [entityUuid](VendorsServiceFilterReq.md#entityuuid)
- [familyId](VendorsServiceFilterReq.md#familyid)
- [formData](VendorsServiceFilterReq.md#formdata)
- [isActive](VendorsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](VendorsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](VendorsServiceFilterReq.md#modificationtimestampstart)
- [name](VendorsServiceFilterReq.md#name)
- [offset](VendorsServiceFilterReq.md#offset)
- [phone](VendorsServiceFilterReq.md#phone)
- [sortKey](VendorsServiceFilterReq.md#sortkey)
- [sortOrder](VendorsServiceFilterReq.md#sortorder)
- [status](VendorsServiceFilterReq.md#status)
- [fields](VendorsServiceFilterReq.md#fields)
- [runtime](VendorsServiceFilterReq.md#runtime)
- [typeName](VendorsServiceFilterReq.md#typename)

### Methods

- [clone](VendorsServiceFilterReq.md#clone)
- [equals](VendorsServiceFilterReq.md#equals)
- [fromBinary](VendorsServiceFilterReq.md#frombinary)
- [fromJson](VendorsServiceFilterReq.md#fromjson)
- [fromJsonString](VendorsServiceFilterReq.md#fromjsonstring)
- [getType](VendorsServiceFilterReq.md#gettype)
- [toBinary](VendorsServiceFilterReq.md#tobinary)
- [toJSON](VendorsServiceFilterReq.md#tojson)
- [toJson](VendorsServiceFilterReq.md#tojson-1)
- [toJsonString](VendorsServiceFilterReq.md#tojsonstring)
- [equals](VendorsServiceFilterReq.md#equals-1)
- [fromBinary](VendorsServiceFilterReq.md#frombinary-1)
- [fromJson](VendorsServiceFilterReq.md#fromjson-1)
- [fromJsonString](VendorsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorsServiceFilterReq**(`data?`): [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\> |

#### Returns

[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Overrides

Message\&lt;VendorsServiceFilterReq\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:1562](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1562)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/vendors.scailo_pb.ts:1511](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1511)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/vendors.scailo_pb.ts:1504](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1504)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/vendors.scailo_pb.ts:1497](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1497)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/vendors.scailo_pb.ts:1518](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1518)

___

### code

• **code**: `string` = `""`

The unique code by which the vendor is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/vendors.scailo_pb.ts:1532](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1532)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/vendors.scailo_pb.ts:1427](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1427)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/vendors.scailo_pb.ts:1462](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1462)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/vendors.scailo_pb.ts:1455](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1455)

___

### email

• **email**: `string` = `""`

The primary email of the vendor

**`Generated`**

from field: string email = 22;

#### Defined in

[src/vendors.scailo_pb.ts:1539](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1539)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/vendors.scailo_pb.ts:1483](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1483)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/vendors.scailo_pb.ts:1553](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1553)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/vendors.scailo_pb.ts:1560](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1560)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/vendors.scailo_pb.ts:1420](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1420)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/vendors.scailo_pb.ts:1476](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1476)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/vendors.scailo_pb.ts:1469](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1469)

___

### name

• **name**: `string` = `""`

The name of the vendor

**`Generated`**

from field: string name = 20;

#### Defined in

[src/vendors.scailo_pb.ts:1525](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1525)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/vendors.scailo_pb.ts:1434](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1434)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the vendor

**`Generated`**

from field: string phone = 23;

#### Defined in

[src/vendors.scailo_pb.ts:1546](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1546)

___

### sortKey

• **sortKey**: [`VENDOR_SORT_KEY`](../enums/VENDOR_SORT_KEY.md) = `VENDOR_SORT_KEY.VENDOR_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.VENDOR_SORT_KEY sort_key = 5;

#### Defined in

[src/vendors.scailo_pb.ts:1448](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1448)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/vendors.scailo_pb.ts:1441](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1441)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this vendor

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/vendors.scailo_pb.ts:1490](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1490)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:1569](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1569)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:1567](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1567)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsServiceFilterReq"``

#### Defined in

[src/vendors.scailo_pb.ts:1568](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1568)

## Methods

### clone

▸ **clone**(): [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md) \| `PlainMessage`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md) \| `PlainMessage`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md) \| `PlainMessage`\<[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1605)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:1593](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1593)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:1597](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1597)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceFilterReq`](VendorsServiceFilterReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:1601](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vendors.scailo_pb.ts#L1601)
