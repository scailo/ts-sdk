[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / AssociatesServiceCountReq

# Class: AssociatesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.AssociatesServiceCountReq

## Hierarchy

- `Message`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\>

  ↳ **`AssociatesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](AssociatesServiceCountReq.md#constructor)

### Properties

- [clientId](AssociatesServiceCountReq.md#clientid)
- [creationTimestampEnd](AssociatesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](AssociatesServiceCountReq.md#creationtimestampstart)
- [department](AssociatesServiceCountReq.md#department)
- [entityUuid](AssociatesServiceCountReq.md#entityuuid)
- [firstName](AssociatesServiceCountReq.md#firstname)
- [isActive](AssociatesServiceCountReq.md#isactive)
- [jobTitle](AssociatesServiceCountReq.md#jobtitle)
- [lastName](AssociatesServiceCountReq.md#lastname)
- [middleName](AssociatesServiceCountReq.md#middlename)
- [modificationTimestampEnd](AssociatesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](AssociatesServiceCountReq.md#modificationtimestampstart)
- [orgName](AssociatesServiceCountReq.md#orgname)
- [orgRefFrom](AssociatesServiceCountReq.md#orgreffrom)
- [orgRefId](AssociatesServiceCountReq.md#orgrefid)
- [personalEmail](AssociatesServiceCountReq.md#personalemail)
- [personalPhone](AssociatesServiceCountReq.md#personalphone)
- [vendorId](AssociatesServiceCountReq.md#vendorid)
- [workEmail](AssociatesServiceCountReq.md#workemail)
- [workPhone](AssociatesServiceCountReq.md#workphone)
- [fields](AssociatesServiceCountReq.md#fields)
- [runtime](AssociatesServiceCountReq.md#runtime)
- [typeName](AssociatesServiceCountReq.md#typename)

### Methods

- [clone](AssociatesServiceCountReq.md#clone)
- [equals](AssociatesServiceCountReq.md#equals)
- [fromBinary](AssociatesServiceCountReq.md#frombinary)
- [fromJson](AssociatesServiceCountReq.md#fromjson)
- [fromJsonString](AssociatesServiceCountReq.md#fromjsonstring)
- [getType](AssociatesServiceCountReq.md#gettype)
- [toBinary](AssociatesServiceCountReq.md#tobinary)
- [toJSON](AssociatesServiceCountReq.md#tojson)
- [toJson](AssociatesServiceCountReq.md#tojson-1)
- [toJsonString](AssociatesServiceCountReq.md#tojsonstring)
- [equals](AssociatesServiceCountReq.md#equals-1)
- [fromBinary](AssociatesServiceCountReq.md#frombinary-1)
- [fromJson](AssociatesServiceCountReq.md#fromjson-1)
- [fromJsonString](AssociatesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatesServiceCountReq**(`data?`): [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\> |

#### Returns

[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Overrides

Message\&lt;AssociatesServiceCountReq\&gt;.constructor

#### Defined in

src/associates.scailo_pb.ts:1275

## Properties

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The client ID of the associate (if this is used, then org_ref_from and org_ref_id combination is not necessary)

**`Generated`**

from field: uint64 client_id = 60;

#### Defined in

src/associates.scailo_pb.ts:1273

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/associates.scailo_pb.ts:1154

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/associates.scailo_pb.ts:1147

___

### department

• **department**: `string` = `""`

The department that the associates works in

**`Generated`**

from field: string department = 17;

#### Defined in

src/associates.scailo_pb.ts:1231

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/associates.scailo_pb.ts:1175

___

### firstName

• **firstName**: `string` = `""`

The first name of the associate

**`Generated`**

from field: string first_name = 10;

#### Defined in

src/associates.scailo_pb.ts:1182

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/associates.scailo_pb.ts:1140

___

### jobTitle

• **jobTitle**: `string` = `""`

The job title of the associate

**`Generated`**

from field: string job_title = 16;

#### Defined in

src/associates.scailo_pb.ts:1224

___

### lastName

• **lastName**: `string` = `""`

The last name of the associate

**`Generated`**

from field: string last_name = 12;

#### Defined in

src/associates.scailo_pb.ts:1196

___

### middleName

• **middleName**: `string` = `""`

The middle name of the associate

**`Generated`**

from field: string middle_name = 11;

#### Defined in

src/associates.scailo_pb.ts:1189

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/associates.scailo_pb.ts:1168

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/associates.scailo_pb.ts:1161

___

### orgName

• **orgName**: `string` = `""`

The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor

**`Generated`**

from field: string org_name = 15;

#### Defined in

src/associates.scailo_pb.ts:1217

___

### orgRefFrom

• **orgRefFrom**: [`ASSOCIATE_ORG_REF_FROM`](../enums/ASSOCIATE_ORG_REF_FROM.md) = `ASSOCIATE_ORG_REF_FROM.ASSOCIATE_ORG_REF_FROM_ANY_UNSPECIFIED`

The association with a vendor or a client

**`Generated`**

from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;

#### Defined in

src/associates.scailo_pb.ts:1203

___

### orgRefId

• **orgRefId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor or client

**`Generated`**

from field: uint64 org_ref_id = 14;

#### Defined in

src/associates.scailo_pb.ts:1210

___

### personalEmail

• **personalEmail**: `string` = `""`

The personal email address of the associate

**`Generated`**

from field: string personal_email = 21;

#### Defined in

src/associates.scailo_pb.ts:1259

___

### personalPhone

• **personalPhone**: `string` = `""`

The personal phone number of the associate

**`Generated`**

from field: string personal_phone = 20;

#### Defined in

src/associates.scailo_pb.ts:1252

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The vendor ID of the associate (if this is used, then org_ref_from and org_ref_id combination is not necessary)

**`Generated`**

from field: uint64 vendor_id = 50;

#### Defined in

src/associates.scailo_pb.ts:1266

___

### workEmail

• **workEmail**: `string` = `""`

The work email address of the associate

**`Generated`**

from field: string work_email = 19;

#### Defined in

src/associates.scailo_pb.ts:1245

___

### workPhone

• **workPhone**: `string` = `""`

The work phone number of the associate

**`Generated`**

from field: string work_phone = 18;

#### Defined in

src/associates.scailo_pb.ts:1238

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/associates.scailo_pb.ts:1282

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/associates.scailo_pb.ts:1280

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssociatesServiceCountReq"``

#### Defined in

src/associates.scailo_pb.ts:1281

## Methods

### clone

▸ **clone**(): [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

Create a deep copy.

#### Returns

[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md) \| `PlainMessage`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md) \| `PlainMessage`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\> |
| `b` | `undefined` \| [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md) \| `PlainMessage`\<[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/associates.scailo_pb.ts:1317

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Defined in

src/associates.scailo_pb.ts:1305

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Defined in

src/associates.scailo_pb.ts:1309

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceCountReq`](AssociatesServiceCountReq.md)

#### Defined in

src/associates.scailo_pb.ts:1313
