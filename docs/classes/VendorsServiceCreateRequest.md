[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsServiceCreateRequest

# Class: VendorsServiceCreateRequest

Describes the parameters necessary to create a record

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

src/vendors.scailo_pb.ts:358

## Properties

### code

• **code**: `string` = `""`

The unique code by which the vendor is classified

**`Generated`**

from field: string code = 11;

#### Defined in

src/vendors.scailo_pb.ts:335

___

### email

• **email**: `string` = `""`

The primary email of the vendor

**`Generated`**

from field: string email = 12;

#### Defined in

src/vendors.scailo_pb.ts:342

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vendors.scailo_pb.ts:307

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

src/vendors.scailo_pb.ts:356

___

### name

• **name**: `string` = `""`

The name of the vendor

**`Generated`**

from field: string name = 10;

#### Defined in

src/vendors.scailo_pb.ts:328

___

### phone

• **phone**: `string` = `""`

The primary contact number of the vendor

**`Generated`**

from field: string phone = 13;

#### Defined in

src/vendors.scailo_pb.ts:349

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/vendors.scailo_pb.ts:314

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

src/vendors.scailo_pb.ts:321

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendors.scailo_pb.ts:365

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendors.scailo_pb.ts:363

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsServiceCreateRequest"``

#### Defined in

src/vendors.scailo_pb.ts:364

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

src/vendors.scailo_pb.ts:388

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

src/vendors.scailo_pb.ts:376

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

src/vendors.scailo_pb.ts:380

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

src/vendors.scailo_pb.ts:384
