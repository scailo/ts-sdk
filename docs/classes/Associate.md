[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Associate

# Class: Associate

Describes the data structure of each associate on the platform

**`Generated`**

from message Scailo.Associate

## Hierarchy

- `Message`\<[`Associate`](Associate.md)\>

  ↳ **`Associate`**

## Table of contents

### Constructors

- [constructor](Associate.md#constructor)

### Properties

- [anniversary](Associate.md#anniversary)
- [birthday](Associate.md#birthday)
- [department](Associate.md#department)
- [description](Associate.md#description)
- [entityUuid](Associate.md#entityuuid)
- [firstName](Associate.md#firstname)
- [jobTitle](Associate.md#jobtitle)
- [lastName](Associate.md#lastname)
- [metadata](Associate.md#metadata)
- [middleName](Associate.md#middlename)
- [orgName](Associate.md#orgname)
- [orgRefFrom](Associate.md#orgreffrom)
- [orgRefId](Associate.md#orgrefid)
- [personalEmail](Associate.md#personalemail)
- [personalPhone](Associate.md#personalphone)
- [vaultFolderId](Associate.md#vaultfolderid)
- [workEmail](Associate.md#workemail)
- [workPhone](Associate.md#workphone)
- [fields](Associate.md#fields)
- [runtime](Associate.md#runtime)
- [typeName](Associate.md#typename)

### Methods

- [clone](Associate.md#clone)
- [equals](Associate.md#equals)
- [fromBinary](Associate.md#frombinary)
- [fromJson](Associate.md#fromjson)
- [fromJsonString](Associate.md#fromjsonstring)
- [getType](Associate.md#gettype)
- [toBinary](Associate.md#tobinary)
- [toJSON](Associate.md#tojson)
- [toJson](Associate.md#tojson-1)
- [toJsonString](Associate.md#tojsonstring)
- [equals](Associate.md#equals-1)
- [fromBinary](Associate.md#frombinary-1)
- [fromJson](Associate.md#fromjson-1)
- [fromJsonString](Associate.md#fromjsonstring-1)

## Constructors

### constructor

• **new Associate**(`data?`): [`Associate`](Associate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Associate`](Associate.md)\> |

#### Returns

[`Associate`](Associate.md)

#### Overrides

Message\&lt;Associate\&gt;.constructor

#### Defined in

[src/associates.scailo_pb.ts:261](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L261)

## Properties

### anniversary

• **anniversary**: `string` = `""`

The associate's anniversary

**`Generated`**

from field: string anniversary = 23;

#### Defined in

[src/associates.scailo_pb.ts:252](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L252)

___

### birthday

• **birthday**: `string` = `""`

The associate's birthday

**`Generated`**

from field: string birthday = 22;

#### Defined in

[src/associates.scailo_pb.ts:245](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L245)

___

### department

• **department**: `string` = `""`

The department that the associates works in

**`Generated`**

from field: string department = 17;

#### Defined in

[src/associates.scailo_pb.ts:210](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L210)

___

### description

• **description**: `string` = `""`

A short description of the associate

**`Generated`**

from field: string description = 24;

#### Defined in

[src/associates.scailo_pb.ts:259](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L259)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/associates.scailo_pb.ts:140](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L140)

___

### firstName

• **firstName**: `string` = `""`

The first name of the associate

**`Generated`**

from field: string first_name = 10;

#### Defined in

[src/associates.scailo_pb.ts:161](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L161)

___

### jobTitle

• **jobTitle**: `string` = `""`

The job title of the associate

**`Generated`**

from field: string job_title = 16;

#### Defined in

[src/associates.scailo_pb.ts:203](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L203)

___

### lastName

• **lastName**: `string` = `""`

The last name of the associate

**`Generated`**

from field: string last_name = 12;

#### Defined in

[src/associates.scailo_pb.ts:175](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L175)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this resource

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/associates.scailo_pb.ts:147](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L147)

___

### middleName

• **middleName**: `string` = `""`

The middle name of the associate

**`Generated`**

from field: string middle_name = 11;

#### Defined in

[src/associates.scailo_pb.ts:168](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L168)

___

### orgName

• **orgName**: `string` = `""`

The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor

**`Generated`**

from field: string org_name = 15;

#### Defined in

[src/associates.scailo_pb.ts:196](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L196)

___

### orgRefFrom

• **orgRefFrom**: [`ASSOCIATE_ORG_REF_FROM`](../enums/ASSOCIATE_ORG_REF_FROM.md) = `ASSOCIATE_ORG_REF_FROM.ASSOCIATE_ORG_REF_FROM_ANY_UNSPECIFIED`

The association with a vendor or a client

**`Generated`**

from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;

#### Defined in

[src/associates.scailo_pb.ts:182](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L182)

___

### orgRefId

• **orgRefId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor or client

**`Generated`**

from field: uint64 org_ref_id = 14;

#### Defined in

[src/associates.scailo_pb.ts:189](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L189)

___

### personalEmail

• **personalEmail**: `string` = `""`

The personal email address of the associate

**`Generated`**

from field: string personal_email = 21;

#### Defined in

[src/associates.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L238)

___

### personalPhone

• **personalPhone**: `string` = `""`

The personal phone number of the associate

**`Generated`**

from field: string personal_phone = 20;

#### Defined in

[src/associates.scailo_pb.ts:231](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L231)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/associates.scailo_pb.ts:154](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L154)

___

### workEmail

• **workEmail**: `string` = `""`

The work email address of the associate

**`Generated`**

from field: string work_email = 19;

#### Defined in

[src/associates.scailo_pb.ts:224](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L224)

___

### workPhone

• **workPhone**: `string` = `""`

The work phone number of the associate

**`Generated`**

from field: string work_phone = 18;

#### Defined in

[src/associates.scailo_pb.ts:217](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L217)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L268)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates.scailo_pb.ts:266](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L266)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Associate"``

#### Defined in

[src/associates.scailo_pb.ts:267](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L267)

## Methods

### clone

▸ **clone**(): [`Associate`](Associate.md)

Create a deep copy.

#### Returns

[`Associate`](Associate.md)

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
| `other` | `undefined` \| ``null`` \| [`Associate`](Associate.md) \| `PlainMessage`\<[`Associate`](Associate.md)\> |

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

▸ **getType**(): `MessageType`\<[`Associate`](Associate.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Associate`](Associate.md)\>

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
| `a` | `undefined` \| [`Associate`](Associate.md) \| `PlainMessage`\<[`Associate`](Associate.md)\> |
| `b` | `undefined` \| [`Associate`](Associate.md) \| `PlainMessage`\<[`Associate`](Associate.md)\> |

#### Returns

`boolean`

#### Defined in

[src/associates.scailo_pb.ts:301](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L301)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Associate`](Associate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Associate`](Associate.md)

#### Defined in

[src/associates.scailo_pb.ts:289](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L289)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Associate`](Associate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Associate`](Associate.md)

#### Defined in

[src/associates.scailo_pb.ts:293](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L293)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Associate`](Associate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Associate`](Associate.md)

#### Defined in

[src/associates.scailo_pb.ts:297](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/associates.scailo_pb.ts#L297)
