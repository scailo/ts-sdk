[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Associate

# Class: Associate

Represents a full Associate within the system.

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

[src/associates.scailo_pb.ts:327](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L327)

## Properties

### anniversary

• **anniversary**: `string` = `""`

**`Description`**

The corporate or employment start anniversary date of the associate.

**`Example`**

```ts
"Mon Jan 02 2016"
```

**`Generated`**

from field: string anniversary = 23;

#### Defined in

[src/associates.scailo_pb.ts:315](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L315)

___

### birthday

• **birthday**: `string` = `""`

**`Description`**

The calendar date of birth of the associate.

**`Example`**

```ts
"Mon Jan 02 2006"
```

**`Generated`**

from field: string birthday = 22;

#### Defined in

[src/associates.scailo_pb.ts:305](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L305)

___

### department

• **department**: `string` = `""`

**`Description`**

The corporate department or division to which the associate is assigned.

**`Example`**

```ts
"Field Operations"
```

**`Generated`**

from field: string department = 17;

#### Defined in

[src/associates.scailo_pb.ts:255](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L255)

___

### description

• **description**: `string` = `""`

**`Description`**

A comprehensive text description, biography, or operational notes regarding the associate.

**`Example`**

```ts
"This is a longer description about the associate"
```

**`Generated`**

from field: string description = 24;

#### Defined in

[src/associates.scailo_pb.ts:325](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L325)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Description`**

The organization's globally unique identifier.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/associates.scailo_pb.ts:155](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L155)

___

### firstName

• **firstName**: `string` = `""`

**`Description`**

The legal first name of the associate. Space characters are strictly prohibited.

**`Example`**

```ts
"John"
```

**`Generated`**

from field: string first_name = 10;

#### Defined in

[src/associates.scailo_pb.ts:183](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L183)

___

### jobTitle

• **jobTitle**: `string` = `""`

**`Description`**

The professional job title held by the associate.

**`Example`**

```ts
"Operations Manager"
```

**`Generated`**

from field: string job_title = 16;

#### Defined in

[src/associates.scailo_pb.ts:245](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L245)

___

### lastName

• **lastName**: `string` = `""`

**`Description`**

The legal last name of the associate. Space characters are strictly prohibited.

**`Example`**

```ts
"Doe"
```

**`Generated`**

from field: string last_name = 12;

#### Defined in

[src/associates.scailo_pb.ts:203](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L203)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

**`Description`**

Standard employee and record metadata including timestamps.

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/associates.scailo_pb.ts:163](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L163)

___

### middleName

• **middleName**: `string` = `""`

**`Description`**

The legal middle name of the associate. Space characters are strictly prohibited.

**`Example`**

```ts
"Fitzgerald"
```

**`Generated`**

from field: string middle_name = 11;

#### Defined in

[src/associates.scailo_pb.ts:193](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L193)

___

### orgName

• **orgName**: `string` = `""`

**`Description`**

The display name of the organization the associate represents.

**`Example`**

```ts
"Acme Inc"
```

**`Note`**

If an explicit `org_ref_id` is supplied, this field will be automatically overwritten and populated by the backend.

**`Generated`**

from field: string org_name = 15;

#### Defined in

[src/associates.scailo_pb.ts:235](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L235)

___

### orgRefFrom

• **orgRefFrom**: [`ASSOCIATE_ORG_REF_FROM`](../enums/ASSOCIATE_ORG_REF_FROM.md) = `ASSOCIATE_ORG_REF_FROM.ASSOCIATE_ORG_REF_FROM_ANY_UNSPECIFIED`

**`Description`**

Identifies the type of external organization mapping (e.g., Client, Vendor, or None).

**`Example`**

```ts
ASSOCIATE_ORG_REF_FROM_EMPTY
```

**`Generated`**

from field: Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;

#### Defined in

[src/associates.scailo_pb.ts:213](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L213)

___

### orgRefId

• **orgRefId**: `bigint` = `protoInt64.zero`

**`Description`**

The numeric sequence identifier matching the targeted external Client or Vendor entity.

**`Example`**

```ts
8923
```

**`Generated`**

from field: uint64 org_ref_id = 14;

#### Defined in

[src/associates.scailo_pb.ts:223](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L223)

___

### personalEmail

• **personalEmail**: `string` = `""`

**`Description`**

The personal or non-work email address for the associate.

**`Example`**

```ts
"j.doe@personal.com"
```

**`Generated`**

from field: string personal_email = 21;

#### Defined in

[src/associates.scailo_pb.ts:295](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L295)

___

### personalPhone

• **personalPhone**: `string` = `""`

**`Description`**

The personal or secondary mobile phone number for the associate.

**`Example`**

```ts
"+12125550123"
```

**`Generated`**

from field: string personal_phone = 20;

#### Defined in

[src/associates.scailo_pb.ts:285](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L285)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Description`**

Link to the document storage folder.

**`Example`**

```ts
15234
```

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/associates.scailo_pb.ts:173](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L173)

___

### workEmail

• **workEmail**: `string` = `""`

**`Description`**

The primary business-related email address for the associate.

**`Example`**

```ts
"j.doe@corporate-hub.com"
```

**`Generated`**

from field: string work_email = 19;

#### Defined in

[src/associates.scailo_pb.ts:275](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L275)

___

### workPhone

• **workPhone**: `string` = `""`

**`Description`**

The primary work or corporate telephone number for contacting the associate.

**`Example`**

```ts
"+12125550123"
```

**`Generated`**

from field: string work_phone = 18;

#### Defined in

[src/associates.scailo_pb.ts:265](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L265)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates.scailo_pb.ts:334](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L334)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates.scailo_pb.ts:332](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L332)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Associate"``

#### Defined in

[src/associates.scailo_pb.ts:333](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L333)

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

[src/associates.scailo_pb.ts:367](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L367)

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

[src/associates.scailo_pb.ts:355](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L355)

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

[src/associates.scailo_pb.ts:359](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L359)

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

[src/associates.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/associates.scailo_pb.ts#L363)
