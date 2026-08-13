[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsServiceUpdateRequest

# Class: VendorsServiceUpdateRequest

Request message for updating an existing Vendor record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the name, code, email, phone and other custom form fields
of an established Vendor.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.VendorsServiceUpdateRequest

## Hierarchy

- `Message`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\>

  ↳ **`VendorsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](VendorsServiceUpdateRequest.md#constructor)

### Properties

- [code](VendorsServiceUpdateRequest.md#code)
- [email](VendorsServiceUpdateRequest.md#email)
- [formData](VendorsServiceUpdateRequest.md#formdata)
- [id](VendorsServiceUpdateRequest.md#id)
- [name](VendorsServiceUpdateRequest.md#name)
- [notifyUsers](VendorsServiceUpdateRequest.md#notifyusers)
- [phone](VendorsServiceUpdateRequest.md#phone)
- [userComment](VendorsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](VendorsServiceUpdateRequest.md#vaultfolderid)
- [fields](VendorsServiceUpdateRequest.md#fields)
- [runtime](VendorsServiceUpdateRequest.md#runtime)
- [typeName](VendorsServiceUpdateRequest.md#typename)

### Methods

- [clone](VendorsServiceUpdateRequest.md#clone)
- [equals](VendorsServiceUpdateRequest.md#equals)
- [fromBinary](VendorsServiceUpdateRequest.md#frombinary)
- [fromJson](VendorsServiceUpdateRequest.md#fromjson)
- [fromJsonString](VendorsServiceUpdateRequest.md#fromjsonstring)
- [getType](VendorsServiceUpdateRequest.md#gettype)
- [toBinary](VendorsServiceUpdateRequest.md#tobinary)
- [toJSON](VendorsServiceUpdateRequest.md#tojson)
- [toJson](VendorsServiceUpdateRequest.md#tojson-1)
- [toJsonString](VendorsServiceUpdateRequest.md#tojsonstring)
- [equals](VendorsServiceUpdateRequest.md#equals-1)
- [fromBinary](VendorsServiceUpdateRequest.md#frombinary-1)
- [fromJson](VendorsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](VendorsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorsServiceUpdateRequest**(`data?`): [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\> |

#### Returns

[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Overrides

Message\&lt;VendorsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:654](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L654)

## Properties

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or alphanumeric token by which the vendor is classified or categorized internally.

**`Example`**

```ts
"VND-ACME-001"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 11;

#### Defined in

[src/vendors.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L606)

___

### email

• `Optional` **email**: `string`

**`Optional`**

**`Description`**

The primary communication email address of the vendor.

**`Example`**

```ts
"orders@acmelogistics.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

Must be a valid and structurally sound email address format.

**`Generated`**

from field: optional string email = 12;

#### Defined in

[src/vendors.scailo_pb.ts:622](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L622)

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

[src/vendors.scailo_pb.ts:652](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L652)

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

[src/vendors.scailo_pb.ts:546](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L546)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or legal name of the vendor organization or individual.

**`Example`**

```ts
"Acme Logistics"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

[src/vendors.scailo_pb.ts:590](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L590)

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

[src/vendors.scailo_pb.ts:558](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L558)

___

### phone

• `Optional` **phone**: `string`

**`Optional`**

**`Description`**

The primary contact phone number of the vendor, typically including country and area codes.

**`Example`**

```ts
"+1-555-222-0199"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string representing a valid phone number format.

**`Generated`**

from field: optional string phone = 13;

#### Defined in

[src/vendors.scailo_pb.ts:638](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L638)

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

[src/vendors.scailo_pb.ts:530](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L530)

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

[src/vendors.scailo_pb.ts:574](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L574)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:661](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L661)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:659](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L659)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsServiceUpdateRequest"``

#### Defined in

[src/vendors.scailo_pb.ts:660](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L660)

## Methods

### clone

▸ **clone**(): [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md) \| `PlainMessage`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md) \| `PlainMessage`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md) \| `PlainMessage`\<[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:685](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L685)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:673](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L673)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:677](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L677)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceUpdateRequest`](VendorsServiceUpdateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:681](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L681)
