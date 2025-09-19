[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServicePaginatedTimersResponse

# Class: ActivitiesServicePaginatedTimersResponse

Describes the response to a pagination timers request

**`Generated`**

from message Scailo.ActivitiesServicePaginatedTimersResponse

## Hierarchy

- `Message`\<[`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)\>

  ↳ **`ActivitiesServicePaginatedTimersResponse`**

## Table of contents

### Constructors

- [constructor](ActivitiesServicePaginatedTimersResponse.md#constructor)

### Properties

- [count](ActivitiesServicePaginatedTimersResponse.md#count)
- [offset](ActivitiesServicePaginatedTimersResponse.md#offset)
- [payload](ActivitiesServicePaginatedTimersResponse.md#payload)
- [total](ActivitiesServicePaginatedTimersResponse.md#total)
- [fields](ActivitiesServicePaginatedTimersResponse.md#fields)
- [runtime](ActivitiesServicePaginatedTimersResponse.md#runtime)
- [typeName](ActivitiesServicePaginatedTimersResponse.md#typename)

### Methods

- [clone](ActivitiesServicePaginatedTimersResponse.md#clone)
- [equals](ActivitiesServicePaginatedTimersResponse.md#equals)
- [fromBinary](ActivitiesServicePaginatedTimersResponse.md#frombinary)
- [fromJson](ActivitiesServicePaginatedTimersResponse.md#fromjson)
- [fromJsonString](ActivitiesServicePaginatedTimersResponse.md#fromjsonstring)
- [getType](ActivitiesServicePaginatedTimersResponse.md#gettype)
- [toBinary](ActivitiesServicePaginatedTimersResponse.md#tobinary)
- [toJSON](ActivitiesServicePaginatedTimersResponse.md#tojson)
- [toJson](ActivitiesServicePaginatedTimersResponse.md#tojson-1)
- [toJsonString](ActivitiesServicePaginatedTimersResponse.md#tojsonstring)
- [equals](ActivitiesServicePaginatedTimersResponse.md#equals-1)
- [fromBinary](ActivitiesServicePaginatedTimersResponse.md#frombinary-1)
- [fromJson](ActivitiesServicePaginatedTimersResponse.md#fromjson-1)
- [fromJsonString](ActivitiesServicePaginatedTimersResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServicePaginatedTimersResponse**(`data?`): [`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)\> |

#### Returns

[`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)

#### Overrides

Message\&lt;ActivitiesServicePaginatedTimersResponse\&gt;.constructor

#### Defined in

[src/activities.scailo_pb.ts:3496](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L3496)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/activities.scailo_pb.ts:3473](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L3473)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/activities.scailo_pb.ts:3480](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L3480)

___

### payload

• **payload**: [`ActivityTimer`](ActivityTimer.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.ActivityTimer payload = 4;

#### Defined in

[src/activities.scailo_pb.ts:3494](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L3494)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/activities.scailo_pb.ts:3487](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L3487)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities.scailo_pb.ts:3503](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L3503)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities.scailo_pb.ts:3501](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L3501)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServicePaginatedTimersResponse"``

#### Defined in

[src/activities.scailo_pb.ts:3502](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L3502)

## Methods

### clone

▸ **clone**(): [`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)

Create a deep copy.

#### Returns

[`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md) \| `PlainMessage`\<[`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)\>

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
| `a` | `undefined` \| [`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md) \| `PlainMessage`\<[`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)\> |
| `b` | `undefined` \| [`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md) \| `PlainMessage`\<[`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities.scailo_pb.ts:3522](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L3522)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)

#### Defined in

[src/activities.scailo_pb.ts:3510](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L3510)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)

#### Defined in

[src/activities.scailo_pb.ts:3514](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L3514)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServicePaginatedTimersResponse`](ActivitiesServicePaginatedTimersResponse.md)

#### Defined in

[src/activities.scailo_pb.ts:3518](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L3518)
