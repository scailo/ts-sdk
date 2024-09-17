[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamInternalSubscriber

# Class: VendorStreamInternalSubscriber

Describes the parameters that constitute an internal subscriber

**`Generated`**

from message Scailo.VendorStreamInternalSubscriber

## Hierarchy

- `Message`\<[`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)\>

  ↳ **`VendorStreamInternalSubscriber`**

## Table of contents

### Constructors

- [constructor](VendorStreamInternalSubscriber.md#constructor)

### Properties

- [entityUuid](VendorStreamInternalSubscriber.md#entityuuid)
- [metadata](VendorStreamInternalSubscriber.md#metadata)
- [userComment](VendorStreamInternalSubscriber.md#usercomment)
- [userId](VendorStreamInternalSubscriber.md#userid)
- [userUuid](VendorStreamInternalSubscriber.md#useruuid)
- [vendorStreamId](VendorStreamInternalSubscriber.md#vendorstreamid)
- [fields](VendorStreamInternalSubscriber.md#fields)
- [runtime](VendorStreamInternalSubscriber.md#runtime)
- [typeName](VendorStreamInternalSubscriber.md#typename)

### Methods

- [clone](VendorStreamInternalSubscriber.md#clone)
- [equals](VendorStreamInternalSubscriber.md#equals)
- [fromBinary](VendorStreamInternalSubscriber.md#frombinary)
- [fromJson](VendorStreamInternalSubscriber.md#fromjson)
- [fromJsonString](VendorStreamInternalSubscriber.md#fromjsonstring)
- [getType](VendorStreamInternalSubscriber.md#gettype)
- [toBinary](VendorStreamInternalSubscriber.md#tobinary)
- [toJSON](VendorStreamInternalSubscriber.md#tojson)
- [toJson](VendorStreamInternalSubscriber.md#tojson-1)
- [toJsonString](VendorStreamInternalSubscriber.md#tojsonstring)
- [equals](VendorStreamInternalSubscriber.md#equals-1)
- [fromBinary](VendorStreamInternalSubscriber.md#frombinary-1)
- [fromJson](VendorStreamInternalSubscriber.md#fromjson-1)
- [fromJsonString](VendorStreamInternalSubscriber.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamInternalSubscriber**(`data?`): [`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)\> |

#### Returns

[`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)

#### Overrides

Message\&lt;VendorStreamInternalSubscriber\&gt;.constructor

#### Defined in

src/vendorstreams.scailo_pb.ts:1991

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/vendorstreams.scailo_pb.ts:1954

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this vendor stream internal subscriber

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/vendorstreams.scailo_pb.ts:1961

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/vendorstreams.scailo_pb.ts:1968

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

Stores the user ID

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

src/vendorstreams.scailo_pb.ts:1982

___

### userUuid

• **userUuid**: `string` = `""`

Stores the user UUID (determined by the user_id)

**`Generated`**

from field: string user_uuid = 30;

#### Defined in

src/vendorstreams.scailo_pb.ts:1989

___

### vendorStreamId

• **vendorStreamId**: `bigint` = `protoInt64.zero`

Stores the vendor stream ID

**`Generated`**

from field: uint64 vendor_stream_id = 10;

#### Defined in

src/vendorstreams.scailo_pb.ts:1975

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendorstreams.scailo_pb.ts:1998

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendorstreams.scailo_pb.ts:1996

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamInternalSubscriber"``

#### Defined in

src/vendorstreams.scailo_pb.ts:1997

## Methods

### clone

▸ **clone**(): [`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)

Create a deep copy.

#### Returns

[`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md) \| `PlainMessage`\<[`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)\>

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
| `a` | `undefined` \| [`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md) \| `PlainMessage`\<[`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)\> |
| `b` | `undefined` \| [`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md) \| `PlainMessage`\<[`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendorstreams.scailo_pb.ts:2019

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:2007

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:2011

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamInternalSubscriber`](VendorStreamInternalSubscriber.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:2015
