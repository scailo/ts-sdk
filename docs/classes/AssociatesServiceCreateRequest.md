[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AssociatesServiceCreateRequest

# Class: AssociatesServiceCreateRequest

Represents the structured payload required to initialize and create an associate record.
Contains primary profile attributes, contact information, organizational mapping data,
and operational metadata.

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

[src/associates.scailo_pb.ts:787](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L787)

## Properties

### anniversary

• `Optional` **anniversary**: `string`

**`Optional`**

**`Description`**

The corporate or employment start anniversary date of the associate.

**`Example`**

```ts
"Mon Jan 02 2016"
```

**`Regex`**

.*

**`Format`**

Must follow the specific string syntax format: `Day Month Date Year`.

**`Generated`**

from field: optional string anniversary = 23;

#### Defined in

[src/associates.scailo_pb.ts:769](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L769)

___

### birthday

• `Optional` **birthday**: `string`

**`Optional`**

**`Description`**

The calendar date of birth of the associate.

**`Example`**

```ts
"Mon Jan 02 2006"
```

**`Regex`**

.*

**`Format`**

Must follow the specific string syntax format: `Day Month Date Year`.

**`Generated`**

from field: optional string birthday = 22;

#### Defined in

[src/associates.scailo_pb.ts:753](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L753)

___

### department

• `Optional` **department**: `string`

**`Optional`**

**`Description`**

The corporate department or division to which the associate is assigned.

**`Example`**

```ts
"Field Operations"
```

**`Regex`**

^[0-9A-Za-z ]*$

**`Format`**

Alphanumeric characters and spaces allowed. Maximum length of 256 characters.

**`Generated`**

from field: optional string department = 17;

#### Defined in

[src/associates.scailo_pb.ts:673](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L673)

___

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

A comprehensive text description, biography, or operational notes regarding the associate.

**`Example`**

```ts
"This is a longer description about the associate"
```

**`Regex`**

.*

**`Format`**

Supports free-form UTF-8 text representation.

**`Generated`**

from field: optional string description = 24;

#### Defined in

[src/associates.scailo_pb.ts:785](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L785)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 1;

#### Defined in

[src/associates.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L513)

___

### firstName

• **firstName**: `string` = `""`

**`Mandatory`**

**`Description`**

The legal first name of the associate. Space characters are strictly prohibited.

**`Example`**

```ts
"John"
```

**`Regex`**

^[0-9A-Za-z]+$

**`Format`**

Alphanumeric characters only. Maximum length of 256 characters.

**`Generated`**

from field: string first_name = 10;

#### Defined in

[src/associates.scailo_pb.ts:561](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L561)

___

### jobTitle

• `Optional` **jobTitle**: `string`

**`Optional`**

**`Description`**

The professional job title held by the associate.

**`Example`**

```ts
"Operations Manager"
```

**`Regex`**

^[0-9A-Za-z ]*$

**`Format`**

Alphanumeric characters and spaces allowed. Maximum length of 256 characters.

**`Generated`**

from field: optional string job_title = 16;

#### Defined in

[src/associates.scailo_pb.ts:657](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L657)

___

### lastName

• `Optional` **lastName**: `string`

**`Optional`**

**`Description`**

The legal last name of the associate. Space characters are strictly prohibited.

**`Example`**

```ts
"Doe"
```

**`Regex`**

^[0-9A-Za-z]*$

**`Format`**

Alphanumeric characters only. Maximum length of 256 characters.

**`Generated`**

from field: optional string last_name = 12;

#### Defined in

[src/associates.scailo_pb.ts:593](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L593)

___

### middleName

• `Optional` **middleName**: `string`

**`Optional`**

**`Description`**

The legal middle name of the associate. Space characters are strictly prohibited.

**`Example`**

```ts
"Fitzgerald"
```

**`Regex`**

^[0-9A-Za-z]*$

**`Format`**

Alphanumeric characters only. Maximum length of 256 characters.

**`Generated`**

from field: optional string middle_name = 11;

#### Defined in

[src/associates.scailo_pb.ts:577](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L577)

___

### orgName

• `Optional` **orgName**: `string`

**`Optional`**

**`Description`**

The display name of the organization the associate represents.

**`Example`**

```ts
"Acme Inc"
```

**`Note`**

If an explicit `org_ref_id` is supplied, this field will be automatically overwritten and populated by the backend.

**`Regex`**

^[0-9A-Za-z ]*$

**`Format`**

Alphanumeric characters and spaces allowed. Maximum length of 256 characters.

**`Generated`**

from field: optional string org_name = 15;

#### Defined in

[src/associates.scailo_pb.ts:641](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L641)

___

### orgRefFrom

• **orgRefFrom**: [`ASSOCIATE_ORG_REF_FROM`](../enums/ASSOCIATE_ORG_REF_FROM.md) = `ASSOCIATE_ORG_REF_FROM.ASSOCIATE_ORG_REF_FROM_ANY_UNSPECIFIED`

**`Mandatory`**

**`Description`**

Identifies the type of external organization mapping (e.g., Client, Vendor, or None).

**`Example`**

```ts
ASSOCIATE_ORG_REF_FROM_EMPTY
```

**`Format`**

Must align with valid states within the ASSOCIATE_ORG_REF_FROM enum definition.

**`Generated`**

from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;

#### Defined in

[src/associates.scailo_pb.ts:607](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L607)

___

### orgRefId

• `Optional` **orgRefId**: `bigint`

**`Optional`**

**`Description`**

The numeric sequence identifier matching the targeted external Client or Vendor entity.

**`Example`**

```ts
8923
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer. Evaluated and validated in conjunction with the `org_ref_from` selector.

**`Generated`**

from field: optional uint64 org_ref_id = 14;

#### Defined in

[src/associates.scailo_pb.ts:623](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L623)

___

### personalEmail

• `Optional` **personalEmail**: `string`

**`Optional`**

**`Description`**

The personal or non-work email address for the associate.

**`Example`**

```ts
"j.doe@personal.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

If provided, must be a valid email address string.

**`Generated`**

from field: optional string personal_email = 21;

#### Defined in

[src/associates.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L737)

___

### personalPhone

• `Optional` **personalPhone**: `string`

**`Optional`**

**`Description`**

The personal or secondary mobile phone number for the associate.

**`Example`**

```ts
"+12125550123"
```

**`Regex`**

.+

**`Format`**

Non-empty string; adoption of standard international E.164 formats is highly recommended.

**`Generated`**

from field: optional string personal_phone = 20;

#### Defined in

[src/associates.scailo_pb.ts:721](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L721)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 2;

#### Defined in

[src/associates.scailo_pb.ts:529](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L529)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/associates.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L545)

___

### workEmail

• `Optional` **workEmail**: `string`

**`Optional`**

**`Description`**

The primary business-related email address for the associate.

**`Example`**

```ts
"j.doe@corporate-hub.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

If provided, must be a valid email address string.

**`Generated`**

from field: optional string work_email = 19;

#### Defined in

[src/associates.scailo_pb.ts:705](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L705)

___

### workPhone

• `Optional` **workPhone**: `string`

**`Optional`**

**`Description`**

The primary work or corporate telephone number for contacting the associate.

**`Example`**

```ts
"+12125550123"
```

**`Regex`**

.+

**`Format`**

Non-empty string; adoption of standard international E.164 formats is highly recommended.

**`Generated`**

from field: optional string work_phone = 18;

#### Defined in

[src/associates.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L689)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates.scailo_pb.ts:794](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L794)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates.scailo_pb.ts:792](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L792)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssociatesServiceCreateRequest"``

#### Defined in

[src/associates.scailo_pb.ts:793](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L793)

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

[src/associates.scailo_pb.ts:827](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L827)

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

[src/associates.scailo_pb.ts:815](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L815)

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

[src/associates.scailo_pb.ts:819](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L819)

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

[src/associates.scailo_pb.ts:823](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/associates.scailo_pb.ts#L823)
