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

[src/associates.scailo_pb.ts:1186](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1186)

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

[src/associates.scailo_pb.ts:1168](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1168)

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

[src/associates.scailo_pb.ts:1152](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1152)

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

[src/associates.scailo_pb.ts:1072](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1072)

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

[src/associates.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1184)

___

### firstName

• `Optional` **firstName**: `string`

**`Optional`**

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

from field: optional string first_name = 10;

#### Defined in

[src/associates.scailo_pb.ts:960](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L960)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/associates.scailo_pb.ts:928](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L928)

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

[src/associates.scailo_pb.ts:1056](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1056)

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

[src/associates.scailo_pb.ts:992](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L992)

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

[src/associates.scailo_pb.ts:976](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L976)

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

[src/associates.scailo_pb.ts:1040](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1040)

___

### orgRefFrom

• `Optional` **orgRefFrom**: [`ASSOCIATE_ORG_REF_FROM`](../enums/ASSOCIATE_ORG_REF_FROM.md)

**`Optional`**

**`Description`**

Identifies the type of external organization mapping (e.g., Client, Vendor, or None).

**`Example`**

```ts
ASSOCIATE_ORG_REF_FROM_EMPTY
```

**`Format`**

Must align with valid states within the ASSOCIATE_ORG_REF_FROM enum definition.

**`Generated`**

from field: optional Scailo.ASSOCIATE_ORG_REF_FROM org_ref_from = 13;

#### Defined in

[src/associates.scailo_pb.ts:1006](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1006)

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

[src/associates.scailo_pb.ts:1022](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1022)

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

[src/associates.scailo_pb.ts:1136](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1136)

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

[src/associates.scailo_pb.ts:1120](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1120)

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

from field: optional string user_comment = 1;

#### Defined in

[src/associates.scailo_pb.ts:912](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L912)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/associates.scailo_pb.ts:944](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L944)

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

[src/associates.scailo_pb.ts:1104](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1104)

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

[src/associates.scailo_pb.ts:1088](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1088)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/associates.scailo_pb.ts:1193](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1193)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/associates.scailo_pb.ts:1191](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1191)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AssociatesServiceUpdateRequest"``

#### Defined in

[src/associates.scailo_pb.ts:1192](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1192)

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

[src/associates.scailo_pb.ts:1226](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1226)

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

[src/associates.scailo_pb.ts:1214](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1214)

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

[src/associates.scailo_pb.ts:1218](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1218)

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

[src/associates.scailo_pb.ts:1222](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/associates.scailo_pb.ts#L1222)
