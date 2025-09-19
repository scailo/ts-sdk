[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssociatesServiceFilterReq

# Class: AssociatesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.AssociatesServiceFilterReq

## Hierarchy

- `Message`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\>

  ↳ **`AssociatesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](AssociatesServiceFilterReq.md#constructor)

### Properties

- [clientId](AssociatesServiceFilterReq.md#clientid)
- [count](AssociatesServiceFilterReq.md#count)
- [creationTimestampEnd](AssociatesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](AssociatesServiceFilterReq.md#creationtimestampstart)
- [department](AssociatesServiceFilterReq.md#department)
- [entityUuid](AssociatesServiceFilterReq.md#entityuuid)
- [firstName](AssociatesServiceFilterReq.md#firstname)
- [isActive](AssociatesServiceFilterReq.md#isactive)
- [jobTitle](AssociatesServiceFilterReq.md#jobtitle)
- [lastName](AssociatesServiceFilterReq.md#lastname)
- [middleName](AssociatesServiceFilterReq.md#middlename)
- [modificationTimestampEnd](AssociatesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](AssociatesServiceFilterReq.md#modificationtimestampstart)
- [offset](AssociatesServiceFilterReq.md#offset)
- [orgName](AssociatesServiceFilterReq.md#orgname)
- [orgRefFrom](AssociatesServiceFilterReq.md#orgreffrom)
- [orgRefId](AssociatesServiceFilterReq.md#orgrefid)
- [personalEmail](AssociatesServiceFilterReq.md#personalemail)
- [personalPhone](AssociatesServiceFilterReq.md#personalphone)
- [sortKey](AssociatesServiceFilterReq.md#sortkey)
- [sortOrder](AssociatesServiceFilterReq.md#sortorder)
- [vendorId](AssociatesServiceFilterReq.md#vendorid)
- [workEmail](AssociatesServiceFilterReq.md#workemail)
- [workPhone](AssociatesServiceFilterReq.md#workphone)
- [fields](AssociatesServiceFilterReq.md#fields)
- [runtime](AssociatesServiceFilterReq.md#runtime)
- [typeName](AssociatesServiceFilterReq.md#typename)

### Methods

- [clone](AssociatesServiceFilterReq.md#clone)
- [equals](AssociatesServiceFilterReq.md#equals)
- [fromBinary](AssociatesServiceFilterReq.md#frombinary)
- [fromJson](AssociatesServiceFilterReq.md#fromjson)
- [fromJsonString](AssociatesServiceFilterReq.md#fromjsonstring)
- [getType](AssociatesServiceFilterReq.md#gettype)
- [toBinary](AssociatesServiceFilterReq.md#tobinary)
- [toJSON](AssociatesServiceFilterReq.md#tojson)
- [toJson](AssociatesServiceFilterReq.md#tojson-1)
- [toJsonString](AssociatesServiceFilterReq.md#tojsonstring)
- [equals](AssociatesServiceFilterReq.md#equals-1)
- [fromBinary](AssociatesServiceFilterReq.md#frombinary-1)
- [fromJson](AssociatesServiceFilterReq.md#fromjson-1)
- [fromJsonString](AssociatesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatesServiceFilterReq**(`data?`): [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\> |

#### Returns

[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Overrides

Message\&lt;AssociatesServiceFilterReq\&gt;.constructor

#### Defined in

[src/associates.scailo_pb.ts:1077](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1077)

## Properties

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The client ID of the associate (if this is used, then org_ref_from and org_ref_id combination is not necessary)

**`Generated`**

from field: uint64 client_id = 60;

#### Defined in

[src/associates.scailo_pb.ts:1075](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1075)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/associates.scailo_pb.ts:921](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L921)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/associates.scailo_pb.ts:956](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L956)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/associates.scailo_pb.ts:949](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L949)

___

### department

• **department**: `string` = `""`

The department that the associates works in

**`Generated`**

from field: string department = 17;

#### Defined in

[src/associates.scailo_pb.ts:1033](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1033)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/associates.scailo_pb.ts:977](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L977)

___

### firstName

• **firstName**: `string` = `""`

The first name of the associate

**`Generated`**

from field: string first_name = 10;

#### Defined in

[src/associates.scailo_pb.ts:984](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L984)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/associates.scailo_pb.ts:914](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L914)

___

### jobTitle

• **jobTitle**: `string` = `""`

The job title of the associate

**`Generated`**

from field: string job_title = 16;

#### Defined in

[src/associates.scailo_pb.ts:1026](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1026)

___

### lastName

• **lastName**: `string` = `""`

The last name of the associate

**`Generated`**

from field: string last_name = 12;

#### Defined in

[src/associates.scailo_pb.ts:998](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L998)

___

### middleName

• **middleName**: `string` = `""`

The middle name of the associate

**`Generated`**

from field: string middle_name = 11;

#### Defined in

[src/associates.scailo_pb.ts:991](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L991)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/associates.scailo_pb.ts:970](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L970)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/associates.scailo_pb.ts:963](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L963)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/associates.scailo_pb.ts:928](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L928)

___

### orgName

• **orgName**: `string` = `""`

The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor

**`Generated`**

from field: string org_name = 15;

#### Defined in

[src/associates.scailo_pb.ts:1019](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1019)

___

### orgRefFrom

• **orgRefFrom**: [`ASSOCIATE_ORG_REF_FROM`](../enums/ASSOCIATE_ORG_REF_FROM.md) = `ASSOCIATE_ORG_REF_FROM.ASSOCIATE_ORG_REF_FROM_ANY_UNSPECIFIED`

The association with a vendor or a client

**`Generated`**

from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;

#### Defined in

[src/associates.scailo_pb.ts:1005](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1005)

___

### orgRefId

• **orgRefId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor or client

**`Generated`**

from field: uint64 org_ref_id = 14;

#### Defined in

[src/associates.scailo_pb.ts:1012](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1012)

___

### personalEmail

• **personalEmail**: `string` = `""`

The personal email address of the associate

**`Generated`**

from field: string personal_email = 21;

#### Defined in

[src/associates.scailo_pb.ts:1061](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1061)

___

### personalPhone

• **personalPhone**: `string` = `""`

The personal phone number of the associate

**`Generated`**

from field: string personal_phone = 20;

#### Defined in

[src/associates.scailo_pb.ts:1054](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1054)

___

### sortKey

• **sortKey**: [`ASSOCIATE_SORT_KEY`](../enums/ASSOCIATE_SORT_KEY.md) = `ASSOCIATE_SORT_KEY.ASSOCIATE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ASSOCIATE_SORT_KEY sort_key = 5;

#### Defined in

[src/associates.scailo_pb.ts:942](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L942)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/associates.scailo_pb.ts:935](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L935)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The vendor ID of the associate (if this is used, then org_ref_from and org_ref_id combination is not necessary)

**`Generated`**

from field: uint64 vendor_id = 50;

#### Defined in

[src/associates.scailo_pb.ts:1068](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1068)

___

### workEmail

• **workEmail**: `string` = `""`

The work email address of the associate

**`Generated`**

from field: string work_email = 19;

#### Defined in

[src/associates.scailo_pb.ts:1047](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1047)

___

### workPhone

• **workPhone**: `string` = `""`

The work phone number of the associate

**`Generated`**

from field: string work_phone = 18;

#### Defined in

[src/associates.scailo_pb.ts:1040](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1040)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates.scailo_pb.ts:1084](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1084)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates.scailo_pb.ts:1082](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1082)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssociatesServiceFilterReq"``

#### Defined in

[src/associates.scailo_pb.ts:1083](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1083)

## Methods

### clone

▸ **clone**(): [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md) \| `PlainMessage`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md) \| `PlainMessage`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md) \| `PlainMessage`\<[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/associates.scailo_pb.ts:1123](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1123)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Defined in

[src/associates.scailo_pb.ts:1111](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1111)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Defined in

[src/associates.scailo_pb.ts:1115](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1115)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceFilterReq`](AssociatesServiceFilterReq.md)

#### Defined in

[src/associates.scailo_pb.ts:1119](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L1119)
