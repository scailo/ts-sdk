[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientsServiceUpdateRequest

# Class: ClientsServiceUpdateRequest

Request message for updating an existing Client record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the name, code, email, phone and other custom form fields
of an established Client.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.ClientsServiceUpdateRequest

## Hierarchy

- `Message`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\>

  ↳ **`ClientsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ClientsServiceUpdateRequest.md#constructor)

### Properties

- [code](ClientsServiceUpdateRequest.md#code)
- [email](ClientsServiceUpdateRequest.md#email)
- [formData](ClientsServiceUpdateRequest.md#formdata)
- [id](ClientsServiceUpdateRequest.md#id)
- [name](ClientsServiceUpdateRequest.md#name)
- [notifyUsers](ClientsServiceUpdateRequest.md#notifyusers)
- [phone](ClientsServiceUpdateRequest.md#phone)
- [userComment](ClientsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ClientsServiceUpdateRequest.md#vaultfolderid)
- [fields](ClientsServiceUpdateRequest.md#fields)
- [runtime](ClientsServiceUpdateRequest.md#runtime)
- [typeName](ClientsServiceUpdateRequest.md#typename)

### Methods

- [clone](ClientsServiceUpdateRequest.md#clone)
- [equals](ClientsServiceUpdateRequest.md#equals)
- [fromBinary](ClientsServiceUpdateRequest.md#frombinary)
- [fromJson](ClientsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ClientsServiceUpdateRequest.md#fromjsonstring)
- [getType](ClientsServiceUpdateRequest.md#gettype)
- [toBinary](ClientsServiceUpdateRequest.md#tobinary)
- [toJSON](ClientsServiceUpdateRequest.md#tojson)
- [toJson](ClientsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ClientsServiceUpdateRequest.md#tojsonstring)
- [equals](ClientsServiceUpdateRequest.md#equals-1)
- [fromBinary](ClientsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ClientsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ClientsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientsServiceUpdateRequest**(`data?`): [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\> |

#### Returns

[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Overrides

Message\&lt;ClientsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/clients.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L461)

## Properties

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or alphanumeric token by which the client is classified or categorized internally.

**`Example`**

```ts
"CLI-ACME-001"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 11;

#### Defined in

[src/clients.scailo_pb.ts:413](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L413)

___

### email

• `Optional` **email**: `string`

**`Optional`**

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

from field: optional string email = 12;

#### Defined in

[src/clients.scailo_pb.ts:429](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L429)

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

[src/clients.scailo_pb.ts:459](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L459)

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

[src/clients.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L353)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or legal name of the client organization or individual.

**`Example`**

```ts
"Acme Corporation"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

[src/clients.scailo_pb.ts:397](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L397)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/clients.scailo_pb.ts:365](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L365)

___

### phone

• `Optional` **phone**: `string`

**`Optional`**

**`Description`**

The primary contact phone number of the client, typically including country and area codes.

**`Example`**

```ts
"+1-555-222-0199"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string string representing a valid phone number format.

**`Generated`**

from field: optional string phone = 13;

#### Defined in

[src/clients.scailo_pb.ts:445](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L445)

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

[src/clients.scailo_pb.ts:337](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L337)

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

[src/clients.scailo_pb.ts:381](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L381)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/clients.scailo_pb.ts:468](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L468)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/clients.scailo_pb.ts:466](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L466)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientsServiceUpdateRequest"``

#### Defined in

[src/clients.scailo_pb.ts:467](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L467)

## Methods

### clone

▸ **clone**(): [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md) \| `PlainMessage`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md) \| `PlainMessage`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md) \| `PlainMessage`\<[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/clients.scailo_pb.ts:492](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L492)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:480](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L480)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:484](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L484)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientsServiceUpdateRequest`](ClientsServiceUpdateRequest.md)

#### Defined in

[src/clients.scailo_pb.ts:488](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/clients.scailo_pb.ts#L488)
