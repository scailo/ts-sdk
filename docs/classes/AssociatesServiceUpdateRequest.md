[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssociatesServiceUpdateRequest

# Class: AssociatesServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a associate

**`Generated`**

from message Scailo.AssociatesServiceUpdateRequest

## Hierarchy

- `Message`\<[`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)\>

  ↳ **`AssociatesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](AssociatesServiceUpdateRequest.md#constructor)

### Properties

- [anniversary](AssociatesServiceUpdateRequest.md#anniversary)
- [birthday](AssociatesServiceUpdateRequest.md#birthday)
- [department](AssociatesServiceUpdateRequest.md#department)
- [description](AssociatesServiceUpdateRequest.md#description)
- [firstName](AssociatesServiceUpdateRequest.md#firstname)
- [id](AssociatesServiceUpdateRequest.md#id)
- [jobTitle](AssociatesServiceUpdateRequest.md#jobtitle)
- [lastName](AssociatesServiceUpdateRequest.md#lastname)
- [middleName](AssociatesServiceUpdateRequest.md#middlename)
- [orgName](AssociatesServiceUpdateRequest.md#orgname)
- [orgRefFrom](AssociatesServiceUpdateRequest.md#orgreffrom)
- [orgRefId](AssociatesServiceUpdateRequest.md#orgrefid)
- [personalEmail](AssociatesServiceUpdateRequest.md#personalemail)
- [personalPhone](AssociatesServiceUpdateRequest.md#personalphone)
- [userComment](AssociatesServiceUpdateRequest.md#usercomment)
- [vaultFolderId](AssociatesServiceUpdateRequest.md#vaultfolderid)
- [workEmail](AssociatesServiceUpdateRequest.md#workemail)
- [workPhone](AssociatesServiceUpdateRequest.md#workphone)
- [fields](AssociatesServiceUpdateRequest.md#fields)
- [runtime](AssociatesServiceUpdateRequest.md#runtime)
- [typeName](AssociatesServiceUpdateRequest.md#typename)

### Methods

- [clone](AssociatesServiceUpdateRequest.md#clone)
- [equals](AssociatesServiceUpdateRequest.md#equals)
- [fromBinary](AssociatesServiceUpdateRequest.md#frombinary)
- [fromJson](AssociatesServiceUpdateRequest.md#fromjson)
- [fromJsonString](AssociatesServiceUpdateRequest.md#fromjsonstring)
- [getType](AssociatesServiceUpdateRequest.md#gettype)
- [toBinary](AssociatesServiceUpdateRequest.md#tobinary)
- [toJSON](AssociatesServiceUpdateRequest.md#tojson)
- [toJson](AssociatesServiceUpdateRequest.md#tojson-1)
- [toJsonString](AssociatesServiceUpdateRequest.md#tojsonstring)
- [equals](AssociatesServiceUpdateRequest.md#equals-1)
- [fromBinary](AssociatesServiceUpdateRequest.md#frombinary-1)
- [fromJson](AssociatesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](AssociatesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AssociatesServiceUpdateRequest**(`data?`): [`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)\> |

#### Returns

[`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)

#### Overrides

Message\&lt;AssociatesServiceUpdateRequest\&gt;.constructor

#### Defined in

src/associates.scailo_pb.ts:783

## Properties

### anniversary

• **anniversary**: `string` = `""`

The associate's anniversary

**`Generated`**

from field: string anniversary = 23;

#### Defined in

src/associates.scailo_pb.ts:774

___

### birthday

• **birthday**: `string` = `""`

The associate's birthday

**`Generated`**

from field: string birthday = 22;

#### Defined in

src/associates.scailo_pb.ts:767

___

### department

• **department**: `string` = `""`

The department that the associates works in

**`Generated`**

from field: string department = 17;

#### Defined in

src/associates.scailo_pb.ts:728

___

### description

• **description**: `string` = `""`

A short description of the associate

**`Generated`**

from field: string description = 24;

#### Defined in

src/associates.scailo_pb.ts:781

___

### firstName

• **firstName**: `string` = `""`

The first name of the associate

**`Generated`**

from field: string first_name = 10;

#### Defined in

src/associates.scailo_pb.ts:679

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the associate that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/associates.scailo_pb.ts:665

___

### jobTitle

• **jobTitle**: `string` = `""`

The job title of the associate

**`Generated`**

from field: string job_title = 16;

#### Defined in

src/associates.scailo_pb.ts:721

___

### lastName

• **lastName**: `string` = `""`

The last name of the associate

**`Generated`**

from field: string last_name = 12;

#### Defined in

src/associates.scailo_pb.ts:693

___

### middleName

• **middleName**: `string` = `""`

The middle name of the associate

**`Generated`**

from field: string middle_name = 11;

#### Defined in

src/associates.scailo_pb.ts:686

___

### orgName

• **orgName**: `string` = `""`

The name of the organization that the associate works in. Will be autofilled if the associate is associated with either a client or a vendor

**`Generated`**

from field: string org_name = 15;

#### Defined in

src/associates.scailo_pb.ts:714

___

### orgRefFrom

• **orgRefFrom**: [`ASSOCIATE_ORG_REF_FROM`](../enums/ASSOCIATE_ORG_REF_FROM.md) = `ASSOCIATE_ORG_REF_FROM.ASSOCIATE_ORG_REF_FROM_ANY_UNSPECIFIED`

The association with a vendor or a client

**`Generated`**

from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;

#### Defined in

src/associates.scailo_pb.ts:700

___

### orgRefId

• **orgRefId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor or client

**`Generated`**

from field: uint64 org_ref_id = 14;

#### Defined in

src/associates.scailo_pb.ts:707

___

### personalEmail

• **personalEmail**: `string` = `""`

The personal email address of the associate

[(buf.validate.field).string.email = true];

**`Generated`**

from field: string personal_email = 21;

#### Defined in

src/associates.scailo_pb.ts:760

___

### personalPhone

• **personalPhone**: `string` = `""`

The personal phone number of the associate

**`Generated`**

from field: string personal_phone = 20;

#### Defined in

src/associates.scailo_pb.ts:751

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/associates.scailo_pb.ts:658

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/associates.scailo_pb.ts:672

___

### workEmail

• **workEmail**: `string` = `""`

The work email address of the associate

[(buf.validate.field).string.email = true];

**`Generated`**

from field: string work_email = 19;

#### Defined in

src/associates.scailo_pb.ts:744

___

### workPhone

• **workPhone**: `string` = `""`

The work phone number of the associate

**`Generated`**

from field: string work_phone = 18;

#### Defined in

src/associates.scailo_pb.ts:735

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/associates.scailo_pb.ts:790

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/associates.scailo_pb.ts:788

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssociatesServiceUpdateRequest"``

#### Defined in

src/associates.scailo_pb.ts:789

## Methods

### clone

▸ **clone**(): [`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md) \| `PlainMessage`\<[`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md) \| `PlainMessage`\<[`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md) \| `PlainMessage`\<[`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/associates.scailo_pb.ts:823

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)

#### Defined in

src/associates.scailo_pb.ts:811

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)

#### Defined in

src/associates.scailo_pb.ts:815

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AssociatesServiceUpdateRequest`](AssociatesServiceUpdateRequest.md)

#### Defined in

src/associates.scailo_pb.ts:819
