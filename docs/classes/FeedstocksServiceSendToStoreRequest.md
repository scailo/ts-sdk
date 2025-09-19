[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FeedstocksServiceSendToStoreRequest

# Class: FeedstocksServiceSendToStoreRequest

Describes the parameters necessary to send a feedstock to store

**`Generated`**

from message Scailo.FeedstocksServiceSendToStoreRequest

## Hierarchy

- `Message`\<[`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)\>

  ↳ **`FeedstocksServiceSendToStoreRequest`**

## Table of contents

### Constructors

- [constructor](FeedstocksServiceSendToStoreRequest.md#constructor)

### Properties

- [description](FeedstocksServiceSendToStoreRequest.md#description)
- [id](FeedstocksServiceSendToStoreRequest.md#id)
- [isQcReportPublic](FeedstocksServiceSendToStoreRequest.md#isqcreportpublic)
- [remainingDimensions](FeedstocksServiceSendToStoreRequest.md#remainingdimensions)
- [shelfLifeTimestamp](FeedstocksServiceSendToStoreRequest.md#shelflifetimestamp)
- [storageId](FeedstocksServiceSendToStoreRequest.md#storageid)
- [storeId](FeedstocksServiceSendToStoreRequest.md#storeid)
- [userComment](FeedstocksServiceSendToStoreRequest.md#usercomment)
- [warrantyTimestamp](FeedstocksServiceSendToStoreRequest.md#warrantytimestamp)
- [fields](FeedstocksServiceSendToStoreRequest.md#fields)
- [runtime](FeedstocksServiceSendToStoreRequest.md#runtime)
- [typeName](FeedstocksServiceSendToStoreRequest.md#typename)

### Methods

- [clone](FeedstocksServiceSendToStoreRequest.md#clone)
- [equals](FeedstocksServiceSendToStoreRequest.md#equals)
- [fromBinary](FeedstocksServiceSendToStoreRequest.md#frombinary)
- [fromJson](FeedstocksServiceSendToStoreRequest.md#fromjson)
- [fromJsonString](FeedstocksServiceSendToStoreRequest.md#fromjsonstring)
- [getType](FeedstocksServiceSendToStoreRequest.md#gettype)
- [toBinary](FeedstocksServiceSendToStoreRequest.md#tobinary)
- [toJSON](FeedstocksServiceSendToStoreRequest.md#tojson)
- [toJson](FeedstocksServiceSendToStoreRequest.md#tojson-1)
- [toJsonString](FeedstocksServiceSendToStoreRequest.md#tojsonstring)
- [equals](FeedstocksServiceSendToStoreRequest.md#equals-1)
- [fromBinary](FeedstocksServiceSendToStoreRequest.md#frombinary-1)
- [fromJson](FeedstocksServiceSendToStoreRequest.md#fromjson-1)
- [fromJsonString](FeedstocksServiceSendToStoreRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FeedstocksServiceSendToStoreRequest**(`data?`): [`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)\> |

#### Returns

[`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)

#### Overrides

Message\&lt;FeedstocksServiceSendToStoreRequest\&gt;.constructor

#### Defined in

[src/feedstocks.scailo_pb.ts:407](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L407)

## Properties

### description

• **description**: `string` = `""`

The description of the feedstock

**`Generated`**

from field: string description = 60;

#### Defined in

[src/feedstocks.scailo_pb.ts:405](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L405)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/feedstocks.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L356)

___

### isQcReportPublic

• **isQcReportPublic**: `boolean` = `false`

Stores if the associated QC report should be public

**`Generated`**

from field: bool is_qc_report_public = 52;

#### Defined in

[src/feedstocks.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L391)

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

Stores any applicable remaining dimensions as a string

**`Generated`**

from field: string remaining_dimensions = 55;

#### Defined in

[src/feedstocks.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L398)

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 40;

#### Defined in

[src/feedstocks.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L363)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the feedstock is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/feedstocks.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L384)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the feedstock is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/feedstocks.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L377)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/feedstocks.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L349)

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 41;

#### Defined in

[src/feedstocks.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L370)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/feedstocks.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L414)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/feedstocks.scailo_pb.ts:412](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L412)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FeedstocksServiceSendToStoreRequest"``

#### Defined in

[src/feedstocks.scailo_pb.ts:413](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L413)

## Methods

### clone

▸ **clone**(): [`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)

Create a deep copy.

#### Returns

[`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md) \| `PlainMessage`\<[`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)\>

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
| `a` | `undefined` \| [`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md) \| `PlainMessage`\<[`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)\> |
| `b` | `undefined` \| [`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md) \| `PlainMessage`\<[`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/feedstocks.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L438)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L426)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:430](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L430)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FeedstocksServiceSendToStoreRequest`](FeedstocksServiceSendToStoreRequest.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L434)
