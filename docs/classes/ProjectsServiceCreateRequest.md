[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProjectsServiceCreateRequest

# Class: ProjectsServiceCreateRequest

Request message for creating a new project record.
This message encapsulates all the foundational metadata, client associations,
compliance details, and external system cross-references required to initialize a project.

**Note:** This serves as the primary entry point for project provisioning, ensuring
that required external mapping, auditing comments, and structural configurations are set.

**`Generated`**

from message Scailo.ProjectsServiceCreateRequest

## Hierarchy

- `Message`\<[`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)\>

  ↳ **`ProjectsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProjectsServiceCreateRequest.md#constructor)

### Properties

- [clientId](ProjectsServiceCreateRequest.md#clientid)
- [description](ProjectsServiceCreateRequest.md#description)
- [entityUuid](ProjectsServiceCreateRequest.md#entityuuid)
- [formData](ProjectsServiceCreateRequest.md#formdata)
- [referenceId](ProjectsServiceCreateRequest.md#referenceid)
- [userComment](ProjectsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ProjectsServiceCreateRequest.md#vaultfolderid)
- [fields](ProjectsServiceCreateRequest.md#fields)
- [runtime](ProjectsServiceCreateRequest.md#runtime)
- [typeName](ProjectsServiceCreateRequest.md#typename)

### Methods

- [clone](ProjectsServiceCreateRequest.md#clone)
- [equals](ProjectsServiceCreateRequest.md#equals)
- [fromBinary](ProjectsServiceCreateRequest.md#frombinary)
- [fromJson](ProjectsServiceCreateRequest.md#fromjson)
- [fromJsonString](ProjectsServiceCreateRequest.md#fromjsonstring)
- [getType](ProjectsServiceCreateRequest.md#gettype)
- [toBinary](ProjectsServiceCreateRequest.md#tobinary)
- [toJSON](ProjectsServiceCreateRequest.md#tojson)
- [toJson](ProjectsServiceCreateRequest.md#tojson-1)
- [toJsonString](ProjectsServiceCreateRequest.md#tojsonstring)
- [equals](ProjectsServiceCreateRequest.md#equals-1)
- [fromBinary](ProjectsServiceCreateRequest.md#frombinary-1)
- [fromJson](ProjectsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ProjectsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProjectsServiceCreateRequest**(`data?`): [`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)\> |

#### Returns

[`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)

#### Overrides

Message\&lt;ProjectsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/projects.scailo_pb.ts:216](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L216)

## Properties

### clientId

• `Optional` **clientId**: `bigint`

**`Optional`**

**`Description`**

The unique identifier of the associated client.

**`Example`**

```ts
455
```

**`Regex`**

^[0-9]*$

**`Format`**

Non-negative 64-bit integer.

**`Generated`**

from field: optional uint64 client_id = 12;

#### Defined in

[src/projects.scailo_pb.ts:184](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L184)

___

### description

• **description**: `string` = `""`

**`Mandatory`**

**`Description`**

The core detailed description or summary of the project.

**`Example`**

```ts
"This is an exploratory project for Customer A."
```

**`Regex`**

^[0-9A-Za-z ]+$

**`Format`**

Alphanumeric characters and spaces only. Must not be empty.

**`Generated`**

from field: string description = 13;

#### Defined in

[src/projects.scailo_pb.ts:200](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L200)

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

[src/projects.scailo_pb.ts:120](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L120)

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

[src/projects.scailo_pb.ts:214](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L214)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/projects.scailo_pb.ts:168](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L168)

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

[src/projects.scailo_pb.ts:136](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L136)

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

[src/projects.scailo_pb.ts:152](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L152)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/projects.scailo_pb.ts:223](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L223)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/projects.scailo_pb.ts:221](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L221)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProjectsServiceCreateRequest"``

#### Defined in

[src/projects.scailo_pb.ts:222](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L222)

## Methods

### clone

▸ **clone**(): [`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md) \| `PlainMessage`\<[`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md) \| `PlainMessage`\<[`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md) \| `PlainMessage`\<[`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/projects.scailo_pb.ts:245](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L245)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)

#### Defined in

[src/projects.scailo_pb.ts:233](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L233)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)

#### Defined in

[src/projects.scailo_pb.ts:237](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L237)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProjectsServiceCreateRequest`](ProjectsServiceCreateRequest.md)

#### Defined in

[src/projects.scailo_pb.ts:241](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/projects.scailo_pb.ts#L241)
