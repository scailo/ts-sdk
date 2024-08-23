[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / AssociatesServiceCreateRequest

# Class: AssociatesServiceCreateRequest

Describes the necessary data structure during creation of a associate

**`Generated`**

from message Scailo.AssociatesServiceCreateRequest

## Hierarchy

- `Message`\<[`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)\>

  ↳ **`AssociatesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](AssociatesServiceCreateRequest.md#constructor)

### Properties

- [anniversary](AssociatesServiceCreateRequest.md#anniversary)
- [birthday](AssociatesServiceCreateRequest.md#birthday)
- [department](AssociatesServiceCreateRequest.md#department)
- [description](AssociatesServiceCreateRequest.md#description)
- [entityUuid](AssociatesServiceCreateRequest.md#entityuuid)
- [firstName](AssociatesServiceCreateRequest.md#firstname)
- [jobTitle](AssociatesServiceCreateRequest.md#jobtitle)
- [lastName](AssociatesServiceCreateRequest.md#lastname)
- [middleName](AssociatesServiceCreateRequest.md#middlename)
- [orgName](AssociatesServiceCreateRequest.md#orgname)
- [orgRefFrom](AssociatesServiceCreateRequest.md#orgreffrom)
- [orgRefId](AssociatesServiceCreateRequest.md#orgrefid)
- [personalEmail](AssociatesServiceCreateRequest.md#personalemail)
- [personalPhone](AssociatesServiceCreateRequest.md#personalphone)
- [userComment](AssociatesServiceCreateRequest.md#usercomment)
- [vaultFolderId](AssociatesServiceCreateRequest.md#vaultfolderid)
- [workEmail](AssociatesServiceCreateRequest.md#workemail)
- [workPhone](AssociatesServiceCreateRequest.md#workphone)
- [fields](AssociatesServiceCreateRequest.md#fields)
- [runtime](AssociatesServiceCreateRequest.md#runtime)
- [typeName](AssociatesServiceCreateRequest.md#typename)

### Methods

- [clone](AssociatesServiceCreateRequest.md#clone)
- [equals](AssociatesServiceCreateRequest.md#equals)
- [fromBinary](AssociatesServiceCreateRequest.md#frombinary)
- [fromJson](AssociatesServiceCreateRequest.md#fromjson)
- [fromJsonString](AssociatesServiceCreateRequest.md#fromjsonstring)
- [getType](AssociatesServiceCreateRequest.md#gettype)
- [toBinary](AssociatesServiceCreateRequest.md#tobinary)
- [toJSON](AssociatesServiceCreateRequest.md#tojson)
- [toJson](AssociatesServiceCreateRequest.md#tojson-1)
- [toJsonString](AssociatesServiceCreateRequest.md#tojsonstring)
- [equals](AssociatesServiceCreateRequest.md#equals-1)
- [fromBinary](AssociatesServiceCreateRequest.md#frombinary-1)
- [fromJson](AssociatesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](AssociatesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatesServiceCreateRequest**(`data?`): [`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)\> |

#### Returns

[`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)

#### Overrides

Message\&lt;AssociatesServiceCreateRequest\&gt;.constructor

#### Defined in

src/associates.scailo_pb.ts:551

## Properties

### anniversary

• **anniversary**: `string` = `""`

The associate's anniversary

**`Generated`**

from field: string anniversary = 23;

#### Defined in

src/associates.scailo_pb.ts:542

___

### birthday

• **birthday**: `string` = `""`

The associate's birthday

**`Generated`**

from field: string birthday = 22;

#### Defined in

src/associates.scailo_pb.ts:535

___

### department

• **department**: `string` = `""`

The department that the associates works in

**`Generated`**

from field: string department = 17;

#### Defined in

src/associates.scailo_pb.ts:496

___

### description

• **description**: `string` = `""`

A short description of the associate

**`Generated`**

from field: string description = 24;

#### Defined in

src/associates.scailo_pb.ts:549

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/associates.scailo_pb.ts:426

___

### firstName

• **firstName**: `string` = `""`

The first name of the associate

**`Generated`**

from field: string first_name = 10;

#### Defined in

src/associates.scailo_pb.ts:447

___

### jobTitle

• **jobTitle**: `string` = `""`

The job title of the associate

**`Generated`**

from field: string job_title = 16;

#### Defined in

src/associates.scailo_pb.ts:489

___

### lastName

• **lastName**: `string` = `""`

The last name of the associate

**`Generated`**

from field: string last_name = 12;

#### Defined in

src/associates.scailo_pb.ts:461

___

### middleName

• **middleName**: `string` = `""`

The middle name of the associate

**`Generated`**

from field: string middle_name = 11;

#### Defined in

src/associates.scailo_pb.ts:454

___

### orgName

• **orgName**: `string` = `""`

The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor

**`Generated`**

from field: string org_name = 15;

#### Defined in

src/associates.scailo_pb.ts:482

___

### orgRefFrom

• **orgRefFrom**: [`ASSOCIATE_ORG_REF_FROM`](../enums/ASSOCIATE_ORG_REF_FROM.md) = `ASSOCIATE_ORG_REF_FROM.ASSOCIATE_ORG_REF_FROM_ANY_UNSPECIFIED`

The association with a vendor or a client

**`Generated`**

from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;

#### Defined in

src/associates.scailo_pb.ts:468

___

### orgRefId

• **orgRefId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor or client

**`Generated`**

from field: uint64 org_ref_id = 14;

#### Defined in

src/associates.scailo_pb.ts:475

___

### personalEmail

• **personalEmail**: `string` = `""`

The personal email address of the associate

[(genesis_validate.rules).string.email = true];

**`Generated`**

from field: string personal_email = 21;

#### Defined in

src/associates.scailo_pb.ts:528

___

### personalPhone

• **personalPhone**: `string` = `""`

The personal phone number of the associate

**`Generated`**

from field: string personal_phone = 20;

#### Defined in

src/associates.scailo_pb.ts:519

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/associates.scailo_pb.ts:433

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/associates.scailo_pb.ts:440

___

### workEmail

• **workEmail**: `string` = `""`

The work email address of the associate

[(genesis_validate.rules).string.email = true];

**`Generated`**

from field: string work_email = 19;

#### Defined in

src/associates.scailo_pb.ts:512

___

### workPhone

• **workPhone**: `string` = `""`

The work phone number of the associate

**`Generated`**

from field: string work_phone = 18;

#### Defined in

src/associates.scailo_pb.ts:503

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/associates.scailo_pb.ts:558

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/associates.scailo_pb.ts:556

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssociatesServiceCreateRequest"``

#### Defined in

src/associates.scailo_pb.ts:557

## Methods

### clone

▸ **clone**(): [`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md) \| `PlainMessage`\<[`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md) \| `PlainMessage`\<[`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md) \| `PlainMessage`\<[`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/associates.scailo_pb.ts:591

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)

#### Defined in

src/associates.scailo_pb.ts:579

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)

#### Defined in

src/associates.scailo_pb.ts:583

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceCreateRequest`](AssociatesServiceCreateRequest.md)

#### Defined in

src/associates.scailo_pb.ts:587
