[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesStatusesServicePaginationResponse

# Class: ActivitiesStatusesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.ActivitiesStatusesServicePaginationResponse

## Hierarchy

- `Message`\<[`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)\>

  ↳ **`ActivitiesStatusesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ActivitiesStatusesServicePaginationResponse.md#constructor)

### Properties

- [count](ActivitiesStatusesServicePaginationResponse.md#count)
- [offset](ActivitiesStatusesServicePaginationResponse.md#offset)
- [payload](ActivitiesStatusesServicePaginationResponse.md#payload)
- [total](ActivitiesStatusesServicePaginationResponse.md#total)
- [fields](ActivitiesStatusesServicePaginationResponse.md#fields)
- [runtime](ActivitiesStatusesServicePaginationResponse.md#runtime)
- [typeName](ActivitiesStatusesServicePaginationResponse.md#typename)

### Methods

- [clone](ActivitiesStatusesServicePaginationResponse.md#clone)
- [equals](ActivitiesStatusesServicePaginationResponse.md#equals)
- [fromBinary](ActivitiesStatusesServicePaginationResponse.md#frombinary)
- [fromJson](ActivitiesStatusesServicePaginationResponse.md#fromjson)
- [fromJsonString](ActivitiesStatusesServicePaginationResponse.md#fromjsonstring)
- [getType](ActivitiesStatusesServicePaginationResponse.md#gettype)
- [toBinary](ActivitiesStatusesServicePaginationResponse.md#tobinary)
- [toJSON](ActivitiesStatusesServicePaginationResponse.md#tojson)
- [toJson](ActivitiesStatusesServicePaginationResponse.md#tojson-1)
- [toJsonString](ActivitiesStatusesServicePaginationResponse.md#tojsonstring)
- [equals](ActivitiesStatusesServicePaginationResponse.md#equals-1)
- [fromBinary](ActivitiesStatusesServicePaginationResponse.md#frombinary-1)
- [fromJson](ActivitiesStatusesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ActivitiesStatusesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesStatusesServicePaginationResponse**(`data?`): [`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)\> |

#### Returns

[`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)

#### Overrides

Message\&lt;ActivitiesStatusesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/activities_statuses.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_statuses.scailo_pb.ts#L538)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/activities_statuses.scailo_pb.ts:515](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_statuses.scailo_pb.ts#L515)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/activities_statuses.scailo_pb.ts:522](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_statuses.scailo_pb.ts#L522)

___

### payload

• **payload**: [`ActivityStatus`](ActivityStatus.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.ActivityStatus payload = 4;

#### Defined in

[src/activities_statuses.scailo_pb.ts:536](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_statuses.scailo_pb.ts#L536)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/activities_statuses.scailo_pb.ts:529](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_statuses.scailo_pb.ts#L529)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_statuses.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_statuses.scailo_pb.ts#L545)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_statuses.scailo_pb.ts:543](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_statuses.scailo_pb.ts#L543)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesStatusesServicePaginationResponse"``

#### Defined in

[src/activities_statuses.scailo_pb.ts:544](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_statuses.scailo_pb.ts#L544)

## Methods

### clone

▸ **clone**(): [`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md) \| `PlainMessage`\<[`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md) \| `PlainMessage`\<[`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md) \| `PlainMessage`\<[`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities_statuses.scailo_pb.ts:564](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_statuses.scailo_pb.ts#L564)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:552](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_statuses.scailo_pb.ts#L552)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:556](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_statuses.scailo_pb.ts#L556)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesServicePaginationResponse`](ActivitiesStatusesServicePaginationResponse.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:560](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities_statuses.scailo_pb.ts#L560)
