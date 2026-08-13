[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceCreateRequest

# Class: ClientsServiceCreateRequest

Request message for onboarding and creating a new Client profile.
This record tracks critical client metadata, unique business identifiers,
contact details, and custom fields associated with a target entity.

**Note:** This is the primary entry point for Sales, Account Management, and Admins
to register new customer profiles or external entities for billing and compliance tracking.

**`Generated`**

from message Scailo.ClientsServiceCreateRequest

## Hierarchy

- `Message`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\>

  ↳ **`ClientsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ClientsServiceCreateRequest.md#constructor)

### Properties

- [code](ClientsServiceCreateRequest.md#code)
- [email](ClientsServiceCreateRequest.md#email)
- [entityUuid](ClientsServiceCreateRequest.md#entityuuid)
- [formData](ClientsServiceCreateRequest.md#formdata)
- [name](ClientsServiceCreateRequest.md#name)
- [phone](ClientsServiceCreateRequest.md#phone)
- [userComment](ClientsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ClientsServiceCreateRequest.md#vaultfolderid)
- [fields](ClientsServiceCreateRequest.md#fields)
- [runtime](ClientsServiceCreateRequest.md#runtime)
- [typeName](ClientsServiceCreateRequest.md#typename)

### Methods

- [clone](ClientsServiceCreateRequest.md#clone)
- [equals](ClientsServiceCreateRequest.md#equals)
- [fromBinary](ClientsServiceCreateRequest.md#frombinary)
- [fromJson](ClientsServiceCreateRequest.md#fromjson)
- [fromJsonString](ClientsServiceCreateRequest.md#fromjsonstring)
- [getType](ClientsServiceCreateRequest.md#gettype)
- [toBinary](ClientsServiceCreateRequest.md#tobinary)
- [toJSON](ClientsServiceCreateRequest.md#tojson)
- [toJson](ClientsServiceCreateRequest.md#tojson-1)
- [toJsonString](ClientsServiceCreateRequest.md#tojsonstring)
- [equals](ClientsServiceCreateRequest.md#equals-1)
- [fromBinary](ClientsServiceCreateRequest.md#frombinary-1)
- [fromJson](ClientsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ClientsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServiceCreateRequest**(`data?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\> |

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Overrides

Message\&lt;ClientsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/clients.scailo_pb.ts:275](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L275)

## Properties

### code

• **code**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique code or alphanumeric token by which the client is classified or categorized internally.

**`Example`**

```ts
"CLI-ACME-001"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string code = 11;

#### Defined in

[src/clients.scailo_pb.ts:227](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L227)

___

### email

• **email**: `string` = `""`

**`Mandatory`**

**`Description`**

The primary communication email address of the client.

**`Example`**

```ts
"billing@acme.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

Must be a valid and structurally sound email address format.

**`Generated`**

from field: string email = 12;

#### Defined in

[src/clients.scailo_pb.ts:243](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L243)

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

[src/clients.scailo_pb.ts:163](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L163)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/clients.scailo_pb.ts:273](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L273)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The official or legal name of the client organization or individual.

**`Example`**

```ts
"Acme Corporation"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/clients.scailo_pb.ts:211](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L211)

___

### phone

• **phone**: `string` = `""`

**`Mandatory`**

**`Description`**

The primary contact phone number of the client, typically including country and area codes.

**`Example`**

```ts
"+1-555-222-0199"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string string representing a valid phone number format.

**`Generated`**

from field: string phone = 13;

#### Defined in

[src/clients.scailo_pb.ts:259](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L259)

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

[src/clients.scailo_pb.ts:179](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L179)

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

[src/clients.scailo_pb.ts:195](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L195)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:282](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L282)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:280](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L280)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServiceCreateRequest"``

#### Defined in

[src/clients.scailo_pb.ts:281](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L281)

## Methods

### clone

▸ **clone**(): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md) \| `PlainMessage`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md) \| `PlainMessage`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md) \| `PlainMessage`\<[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients.scailo_pb.ts:305](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L305)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:293](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L293)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:297](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L297)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceCreateRequest`](ClientsServiceCreateRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:301](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/clients.scailo_pb.ts#L301)
