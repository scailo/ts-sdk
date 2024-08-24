[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorUserLoginResponse

# Class: VendorUserLoginResponse

Describes the response to a vendor user login request

**`Generated`**

from message Scailo.VendorUserLoginResponse

## Hierarchy

- `Message`\<[`VendorUserLoginResponse`](VendorUserLoginResponse.md)\>

  ↳ **`VendorUserLoginResponse`**

## Table of contents

### Constructors

- [constructor](VendorUserLoginResponse.md#constructor)

### Properties

- [authToken](VendorUserLoginResponse.md#authtoken)
- [expiresAt](VendorUserLoginResponse.md#expiresat)
- [username](VendorUserLoginResponse.md#username)
- [vendorId](VendorUserLoginResponse.md#vendorid)
- [vendorUuid](VendorUserLoginResponse.md#vendoruuid)
- [fields](VendorUserLoginResponse.md#fields)
- [runtime](VendorUserLoginResponse.md#runtime)
- [typeName](VendorUserLoginResponse.md#typename)

### Methods

- [clone](VendorUserLoginResponse.md#clone)
- [equals](VendorUserLoginResponse.md#equals)
- [fromBinary](VendorUserLoginResponse.md#frombinary)
- [fromJson](VendorUserLoginResponse.md#fromjson)
- [fromJsonString](VendorUserLoginResponse.md#fromjsonstring)
- [getType](VendorUserLoginResponse.md#gettype)
- [toBinary](VendorUserLoginResponse.md#tobinary)
- [toJSON](VendorUserLoginResponse.md#tojson)
- [toJson](VendorUserLoginResponse.md#tojson-1)
- [toJsonString](VendorUserLoginResponse.md#tojsonstring)
- [equals](VendorUserLoginResponse.md#equals-1)
- [fromBinary](VendorUserLoginResponse.md#frombinary-1)
- [fromJson](VendorUserLoginResponse.md#fromjson-1)
- [fromJsonString](VendorUserLoginResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorUserLoginResponse**(`data?`): [`VendorUserLoginResponse`](VendorUserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorUserLoginResponse`](VendorUserLoginResponse.md)\> |

#### Returns

[`VendorUserLoginResponse`](VendorUserLoginResponse.md)

#### Overrides

Message\&lt;VendorUserLoginResponse\&gt;.constructor

#### Defined in

src/logins.scailo_pb.ts:402

## Properties

### authToken

• **authToken**: `string` = `""`

The token that needs to be used as part of every request

**`Generated`**

from field: string auth_token = 2;

#### Defined in

src/logins.scailo_pb.ts:379

___

### expiresAt

• **expiresAt**: `bigint` = `protoInt64.zero`

The unix timestamp after which the auth_token is invalid

**`Generated`**

from field: uint64 expires_at = 3;

#### Defined in

src/logins.scailo_pb.ts:386

___

### username

• **username**: `string` = `""`

Username of the user that just logged in

**`Generated`**

from field: string username = 1;

#### Defined in

src/logins.scailo_pb.ts:372

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 10;

#### Defined in

src/logins.scailo_pb.ts:393

___

### vendorUuid

• **vendorUuid**: `string` = `""`

The UUID of the vendor

**`Generated`**

from field: string vendor_uuid = 11;

#### Defined in

src/logins.scailo_pb.ts:400

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/logins.scailo_pb.ts:409

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/logins.scailo_pb.ts:407

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorUserLoginResponse"``

#### Defined in

src/logins.scailo_pb.ts:408

## Methods

### clone

▸ **clone**(): [`VendorUserLoginResponse`](VendorUserLoginResponse.md)

Create a deep copy.

#### Returns

[`VendorUserLoginResponse`](VendorUserLoginResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorUserLoginResponse`](VendorUserLoginResponse.md) \| `PlainMessage`\<[`VendorUserLoginResponse`](VendorUserLoginResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorUserLoginResponse`](VendorUserLoginResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorUserLoginResponse`](VendorUserLoginResponse.md)\>

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
| `a` | `undefined` \| [`VendorUserLoginResponse`](VendorUserLoginResponse.md) \| `PlainMessage`\<[`VendorUserLoginResponse`](VendorUserLoginResponse.md)\> |
| `b` | `undefined` \| [`VendorUserLoginResponse`](VendorUserLoginResponse.md) \| `PlainMessage`\<[`VendorUserLoginResponse`](VendorUserLoginResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/logins.scailo_pb.ts:429

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorUserLoginResponse`](VendorUserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorUserLoginResponse`](VendorUserLoginResponse.md)

#### Defined in

src/logins.scailo_pb.ts:417

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorUserLoginResponse`](VendorUserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorUserLoginResponse`](VendorUserLoginResponse.md)

#### Defined in

src/logins.scailo_pb.ts:421

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorUserLoginResponse`](VendorUserLoginResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorUserLoginResponse`](VendorUserLoginResponse.md)

#### Defined in

src/logins.scailo_pb.ts:425
