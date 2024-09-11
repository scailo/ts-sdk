[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorStreamsServiceImportInternalSubscribersRequest

# Class: VendorStreamsServiceImportInternalSubscribersRequest

Describes the data model to handle importing of internal subscribers from the given identifier representing a team or a department

**`Generated`**

from message Scailo.VendorStreamsServiceImportInternalSubscribersRequest

## Hierarchy

- `Message`\<[`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)\>

  ↳ **`VendorStreamsServiceImportInternalSubscribersRequest`**

## Table of contents

### Constructors

- [constructor](VendorStreamsServiceImportInternalSubscribersRequest.md#constructor)

### Properties

- [deleteExisting](VendorStreamsServiceImportInternalSubscribersRequest.md#deleteexisting)
- [resourceId](VendorStreamsServiceImportInternalSubscribersRequest.md#resourceid)
- [userComment](VendorStreamsServiceImportInternalSubscribersRequest.md#usercomment)
- [vendorStreamId](VendorStreamsServiceImportInternalSubscribersRequest.md#vendorstreamid)
- [fields](VendorStreamsServiceImportInternalSubscribersRequest.md#fields)
- [runtime](VendorStreamsServiceImportInternalSubscribersRequest.md#runtime)
- [typeName](VendorStreamsServiceImportInternalSubscribersRequest.md#typename)

### Methods

- [clone](VendorStreamsServiceImportInternalSubscribersRequest.md#clone)
- [equals](VendorStreamsServiceImportInternalSubscribersRequest.md#equals)
- [fromBinary](VendorStreamsServiceImportInternalSubscribersRequest.md#frombinary)
- [fromJson](VendorStreamsServiceImportInternalSubscribersRequest.md#fromjson)
- [fromJsonString](VendorStreamsServiceImportInternalSubscribersRequest.md#fromjsonstring)
- [getType](VendorStreamsServiceImportInternalSubscribersRequest.md#gettype)
- [toBinary](VendorStreamsServiceImportInternalSubscribersRequest.md#tobinary)
- [toJSON](VendorStreamsServiceImportInternalSubscribersRequest.md#tojson)
- [toJson](VendorStreamsServiceImportInternalSubscribersRequest.md#tojson-1)
- [toJsonString](VendorStreamsServiceImportInternalSubscribersRequest.md#tojsonstring)
- [equals](VendorStreamsServiceImportInternalSubscribersRequest.md#equals-1)
- [fromBinary](VendorStreamsServiceImportInternalSubscribersRequest.md#frombinary-1)
- [fromJson](VendorStreamsServiceImportInternalSubscribersRequest.md#fromjson-1)
- [fromJsonString](VendorStreamsServiceImportInternalSubscribersRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorStreamsServiceImportInternalSubscribersRequest**(`data?`): [`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)\> |

#### Returns

[`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)

#### Overrides

Message\&lt;VendorStreamsServiceImportInternalSubscribersRequest\&gt;.constructor

#### Defined in

src/vendorstreams.scailo_pb.ts:2077

## Properties

### deleteExisting

• **deleteExisting**: `boolean` = `false`

Stores if the existing internal subscribers in the vendor stream need to be deleted before adding from the source record

**`Generated`**

from field: bool delete_existing = 4;

#### Defined in

src/vendorstreams.scailo_pb.ts:2075

___

### resourceId

• **resourceId**: `bigint` = `protoInt64.zero`

The ID of the team or the department from which internal subscribers need to be added to the vendor stream

**`Generated`**

from field: uint64 resource_id = 3;

#### Defined in

src/vendorstreams.scailo_pb.ts:2068

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/vendorstreams.scailo_pb.ts:2054

___

### vendorStreamId

• **vendorStreamId**: `bigint` = `protoInt64.zero`

The ID of the vendor stream

**`Generated`**

from field: uint64 vendor_stream_id = 2;

#### Defined in

src/vendorstreams.scailo_pb.ts:2061

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendorstreams.scailo_pb.ts:2084

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendorstreams.scailo_pb.ts:2082

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorStreamsServiceImportInternalSubscribersRequest"``

#### Defined in

src/vendorstreams.scailo_pb.ts:2083

## Methods

### clone

▸ **clone**(): [`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)

Create a deep copy.

#### Returns

[`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)\>

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
| `a` | `undefined` \| [`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)\> |
| `b` | `undefined` \| [`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md) \| `PlainMessage`\<[`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/vendorstreams.scailo_pb.ts:2103

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:2091

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:2095

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorStreamsServiceImportInternalSubscribersRequest`](VendorStreamsServiceImportInternalSubscribersRequest.md)

#### Defined in

src/vendorstreams.scailo_pb.ts:2099
