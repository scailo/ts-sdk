[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsServiceCreateRequest

# Class: VendorsServiceCreateRequest

Request message for onboarding and creating a new Vendor profile.
This record tracks critical vendor metadata, unique business identifiers,
contact details, and custom fields associated with a target entity.

**Note:** This is the primary entry point for Procurement, Vendor Management, and Admins
to register new vendor profiles or external entities for compliance and tracking.

**`Generated`**

from message Scailo.VendorsServiceCreateRequest

## Hierarchy

- `Message`\<[`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)\>

  ↳ **`VendorsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](VendorsServiceCreateRequest.md#constructor)

### Properties

- [code](VendorsServiceCreateRequest.md#code)
- [email](VendorsServiceCreateRequest.md#email)
- [entityUuid](VendorsServiceCreateRequest.md#entityuuid)
- [formData](VendorsServiceCreateRequest.md#formdata)
- [name](VendorsServiceCreateRequest.md#name)
- [phone](VendorsServiceCreateRequest.md#phone)
- [userComment](VendorsServiceCreateRequest.md#usercomment)
- [vaultFolderId](VendorsServiceCreateRequest.md#vaultfolderid)
- [fields](VendorsServiceCreateRequest.md#fields)
- [runtime](VendorsServiceCreateRequest.md#runtime)
- [typeName](VendorsServiceCreateRequest.md#typename)

### Methods

- [clone](VendorsServiceCreateRequest.md#clone)
- [equals](VendorsServiceCreateRequest.md#equals)
- [fromBinary](VendorsServiceCreateRequest.md#frombinary)
- [fromJson](VendorsServiceCreateRequest.md#fromjson)
- [fromJsonString](VendorsServiceCreateRequest.md#fromjsonstring)
- [getType](VendorsServiceCreateRequest.md#gettype)
- [toBinary](VendorsServiceCreateRequest.md#tobinary)
- [toJSON](VendorsServiceCreateRequest.md#tojson)
- [toJson](VendorsServiceCreateRequest.md#tojson-1)
- [toJsonString](VendorsServiceCreateRequest.md#tojsonstring)
- [equals](VendorsServiceCreateRequest.md#equals-1)
- [fromBinary](VendorsServiceCreateRequest.md#frombinary-1)
- [fromJson](VendorsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](VendorsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorsServiceCreateRequest**(`data?`): [`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)\> |

#### Returns

[`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)

#### Overrides

Message\&lt;VendorsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:468](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L468)

## Properties

### code

• **code**: `string` = `""`

**`Mandatory`**

**`Description`**

The unique code or alphanumeric token by which the vendor is classified or categorized internally.

**`Example`**

```ts
"VND-ACME-001"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string code = 11;

#### Defined in

[src/vendors.scailo_pb.ts:420](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L420)

___

### email

• **email**: `string` = `""`

**`Mandatory`**

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

from field: string email = 12;

#### Defined in

[src/vendors.scailo_pb.ts:436](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L436)

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

[src/vendors.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L356)

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

[src/vendors.scailo_pb.ts:466](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L466)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The official or legal name of the vendor organization or individual.

**`Example`**

```ts
"Acme Logistics"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/vendors.scailo_pb.ts:404](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L404)

___

### phone

• **phone**: `string` = `""`

**`Mandatory`**

**`Description`**

The primary contact phone number of the vendor, typically including country and area codes.

**`Example`**

```ts
"+1-555-222-0199"
```

**`Regex`**

.+

**`Format`**

Must be a non-empty string representing a valid phone number format.

**`Generated`**

from field: string phone = 13;

#### Defined in

[src/vendors.scailo_pb.ts:452](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L452)

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

[src/vendors.scailo_pb.ts:372](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L372)

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

[src/vendors.scailo_pb.ts:388](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L388)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:475](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L475)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:473](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L473)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsServiceCreateRequest"``

#### Defined in

[src/vendors.scailo_pb.ts:474](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L474)

## Methods

### clone

▸ **clone**(): [`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md) \| `PlainMessage`\<[`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md) \| `PlainMessage`\<[`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md) \| `PlainMessage`\<[`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:498](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L498)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:486](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L486)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:490](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L490)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceCreateRequest`](VendorsServiceCreateRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:494](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/vendors.scailo_pb.ts#L494)
